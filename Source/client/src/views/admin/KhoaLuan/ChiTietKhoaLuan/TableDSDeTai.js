import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import React, { useMemo, useState } from 'react';
import { Box, Button } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import { mkConfig, generateCsv, download } from 'export-to-csv'; //or use your library of choice here
import "./TableDSDeTai.scss"
import { IconButton, } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { Delete, Edit, Visibility } from '@mui/icons-material';
import { fetchDeleteDeTai } from "../../GetData"
import { toast } from "react-toastify";
const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
});

const TableDSDeTai = (props) => {
    const { data_detai, MaKLTN } = props
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
    let navigate = useNavigate();

    const handleDeleteRows = async (row) => {
        const headers = { 'x-access-token': accessToken };
        let res = await fetchDeleteDeTai(headers, MaKLTN, row.original.TenDeTai, row.original.GVHD.MaGV)
        if (res.status === true) {
            toast.success(res.message)
            navigate(`/admin/khoaluan`)
            return;
        }
        if (res.success === false) {
            toast.error(res.message)
            return;
        }
    }

    const handleExportRows = (rows) => {
        const rowData = rows.map((row) => row.original);
        const csv = generateCsv(csvConfig)(rowData);
        download(csvConfig)(csv);
    };

    const handleExportData = () => {
        const csv = generateCsv(csvConfig)(data_detai);
        download(csvConfig)(csv);
    };
    const columns = useMemo(
        () => [
            {
                accessorKey: 'TenDeTai',
                header: 'Tên đề tài',
                size: 250,

            },
            {
                accessorKey: 'GVHD',
                accessorFn: (dataRow) => dataRow.GVHD.HoGV + dataRow.GVHD.TenGV,
                header: 'Giảng viên hướng dẫn',
                size: 200,
            },
            {
                accessorKey: 'TrangThaiDeTai',
                header: 'Trạng thái',
                size: 100,
            },
        ]
    );

    const table = useMantineReactTable({
        columns,
        data: data_detai,
        enableRowSelection: true,
        columnFilterDisplayMode: 'popover',
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        enableColumnActions: true,
        enableColumnActions: true,
        enableRowActions: true,
        positionActionsColumn: 'last',

        renderRowActions: ({ row }) => (
            <Box sx={{ display: 'flex', gap: '0.3rem' }}>
                <Link to={`/admin/khoaluan/${MaKLTN}/detai/` + row.original.TenDeTai}>
                    <IconButton >
                        <Visibility fontSize="small" />
                    </IconButton>
                </Link>
                <Link to={`/admin/khoaluan/${MaKLTN}/detai/edit/` + row.original.TenDeTai}>
                    <IconButton  >
                        <Edit fontSize="small" />
                    </IconButton>
                </Link>

                <IconButton onClick={() => handleDeleteRows(row)}>
                    <Delete fontSize="small" sx={{ color: 'red' }} />
                </IconButton>
            </Box >

        ),
        renderTopToolbarCustomActions: ({ table }) => (
            <Box
                sx={{
                    display: 'flex',
                    gap: '16px',
                    padding: '8px',
                    flexWrap: 'wrap',
                }}>
                <Link to={`/admin/khoaluan/${MaKLTN}/detai/new`}>
                    <Button>
                        Thêm đề tài
                    </Button>
                </Link>


                <Button
                    disabled={
                        !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
                    }
                    //only export selected rows
                    onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
                    leftIcon={<IconUpload />}
                    variant="filled"
                >
                    Export Selected Rows
                </Button>
            </Box>

        ),
    });

    return (
        <>

            <MantineReactTable table={table} />

        </>
    )

};

export default TableDSDeTai;