

import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import React, { useCallback, useMemo, useState } from 'react';
import { Box, Button } from '@mantine/core';
import { IconDownload, IconUpload } from '@tabler/icons-react';
import { mkConfig, generateCsv, download } from 'export-to-csv'; //or use your library of choice here
import { Link } from "react-router-dom";
import {
    IconButton,
} from '@mui/material';
import { Delete, Edit, Visibility } from '@mui/icons-material';


const data = [
    { MaCN: 'home', TenChucNang: 'Dashboard', },
    { MaCN: 'dkichuyennganh', TenChucNang: 'Đăng ký chuyên ngành' },
    { MaCN: 'khoaluan', TenChucNang: 'Khóa luận' },
    { MaCN: 'thuctap', TenChucNang: 'Thực tập' },
    { MaCN: 'totnghiep', TenChucNang: 'Tốt nghiệp' },
    { MaCN: 'canhbaohoctap', TenChucNang: 'Cảnh báo' },
    { MaCN: 'giangvien', TenChucNang: 'Giảng viên' },
    { MaCN: 'sinhvien', TenChucNang: 'Sinh viên' },
    { MaCN: 'nganhhoc', TenChucNang: 'Ngành' },
    { MaCN: 'chuyennganh', TenChucNang: 'Chuyên ngành' },
    { MaCN: 'taikhoan', TenChucNang: 'Tài khoản' },
    { MaCN: 'chucnang', TenChucNang: 'Chức năng' },
    { MaCN: 'chat', TenChucNang: 'ChatBox' },
]

const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
});

const TableChucNang = () => {
    const [checkdiv, setCheckdiv] = useState(false)

    const handleExportRows = (rows) => {
        const rowData = rows.map((row) => row.original);
        const csv = generateCsv(csvConfig)(rowData);
        download(csvConfig)(csv);
    };

    const handleExportData = () => {
        const csv = generateCsv(csvConfig)(data);
        download(csvConfig)(csv);
    };
    const columns = useMemo(
        () => [
            {
                accessorKey: 'MaCN',
                header: 'Mã chức năng',
                size: 100,
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,

            },
            {
                accessorKey: 'TenChucNang',
                header: 'Tên chức năng',
                size: 100,
                enableEditing: false,

            },

        ]
    );

    const table = useMantineReactTable({
        columns,
        data,
        enableRowSelection: true,
        columnFilterDisplayMode: 'popover',
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        positionActionsColumn: 'last',
        enableColumnActions: true,
        enableRowActions: true,



        renderRowActions: ({ row, table }) => (
            <Box sx={{ display: 'flex', gap: '0.3rem' }}>
                <IconButton onClick={() => table.setEditingRow(row)}>
                    <Visibility fontSize="small" />
                </IconButton>


                <Link to={"/admin/chucnang/edit/" + row.original.MaCN}>
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
                <Button
                    color="lightblue"
                    //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                    onClick={handleExportData}
                    leftIcon={<IconUpload />}
                    variant="filled"
                >
                    Export All Data
                </Button>
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

                <Button
                    //only export selected rows
                    // onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
                    leftIcon={<IconDownload />}
                    variant="filled"
                >
                    Import Data
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

export default TableChucNang;