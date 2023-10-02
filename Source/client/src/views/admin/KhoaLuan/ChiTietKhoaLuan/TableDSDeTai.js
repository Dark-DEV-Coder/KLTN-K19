import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import React, { useMemo, } from 'react';
import { Box, Button } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import { mkConfig, generateCsv, download } from 'export-to-csv'; //or use your library of choice here
import "./TableDSDeTai.scss"
import { IconButton, } from '@mui/material';
import { Link } from "react-router-dom";
import { Delete, Edit, Visibility } from '@mui/icons-material';
const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
});

const TableDSDeTai = (props) => {
    const { data_detai } = props

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
                accessorKey: 'ten',
                header: 'Tên đề tài',
                size: 500,

            },
            {
                accessorKey: 'giangvienhuongdan',
                header: 'Giảng viên hướng dẫn',
                size: 250,

            },
            {

                accessorKey: 'donvi',
                header: 'Đơn vị công tác',
                size: 100,
            },
            {
                header: 'Trạng thái',
                accessorKey: 'trangthai',
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
                <Link to={"/admin/khoaluan/detai/" + row.original.ten}>
                    <IconButton >
                        <Visibility fontSize="small" />
                    </IconButton>
                </Link>
                <Link to={"/admin/khoaluan/detai/edit/" + row.original.ten}>
                    <IconButton  >
                        <Edit fontSize="small" />
                    </IconButton>
                </Link>

                <IconButton onClick={() => console.log(row.original.name)}>
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
                }}
            >
                {/* <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Tất cả
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item dd ">Đăng ký</a>
                        <a className="dropdown-item dd">Chưa đăng ký</a>

                    </div>
                </div> */}

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