import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import React, { useMemo, useState } from 'react';
import { Box } from '@mantine/core';
import { mkConfig, generateCsv, download } from 'export-to-csv'; //or use your library of choice here
import { Link } from "react-router-dom";
import {
    IconButton,
} from '@mui/material';
import { Delete, Edit, Label, Visibility } from '@mui/icons-material';

const data = [
    {
        machuyennganh: 'HTTT',
        tenchuyennganh: 'Hệ Thống Thông Tin',
        nganh: 'Công nghệ thông tin',
        trangthai: 1,
    },
    {
        machuyennganh: 'KHMT',
        tenchuyennganh: 'Khoa Học Máy Tính',
        nganh: 'Công nghệ thông tin',
        trangthai: 1,
    },
    {
        machuyennganh: 'KTPM',
        tenchuyennganh: 'Kỹ Thuật Phần Mềm',
        nganh: 'Công nghệ thông tin',
        trangthai: 1,
    },
    {
        machuyennganh: 'MMT',
        tenchuyennganh: 'Mạng Máy Tính',
        nganh: 'Công nghệ thông tin',
        trangthai: 1,
    },
]

const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
});

const TableChuyenNganh = () => {
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
                accessorKey: 'machuyennganh',
                header: 'Mã chuyên ngành',
                size: 100,
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,
            },
            {
                accessorKey: 'tenchuyennganh',
                header: 'Tên chuyên ngành',
                size: 100,
                enableEditing: false,
            },
        ]
    );

    const table = useMantineReactTable({
        columns,
        data,
        enableRowSelection: false,
        columnFilterDisplayMode: 'popover',
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        positionActionsColumn: 'last',
        // enableColumnActions: true,
        // enableRowActions: true,

        renderTopToolbarCustomActions: ({ table }) => (
            <label className="ds-cn" for="inputTen">Danh sách chuyên ngành</label>
        ),
        renderRowActions: ({ row, table }) => (
            <Box sx={{ display: 'flex', gap: '0.3rem' }}>
                {/* <Link onClick={() => table.setEditingRow(row)}>
                    <IconButton>
                        <Visibility fontSize="small" />
                    </IconButton>
                </Link> */}
                {/* <Link to={"/admin/sinhvien/edit/" + row.original.masv}>
                    <IconButton onClick={() => table.setEditingRow(row)}>
                        <Edit fontSize="small" />
                    </IconButton>
                </Link> */}

                {/* <IconButton onClick={() => console.log(row.original.name)}>
                    <Delete fontSize="small" sx={{ color: 'red' }} />
                </IconButton> */}
            </Box >

        ),

    })
    return (
        <>
            <MantineReactTable table={table} />
        </>
    )
}

export default TableChuyenNganh