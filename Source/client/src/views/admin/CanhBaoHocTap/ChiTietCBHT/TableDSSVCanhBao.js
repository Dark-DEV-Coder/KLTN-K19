import "./TableDSSVCanhBao.scss";
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
    {
        masv: '3119560001',
        hosv: 'Lê Thị',
        tensv: 'A',
        ngaysinh: '2002-08-12',
        chuyennganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1821',
        namthu: '3',
        hkthu: '8',
        solancb: '',
        tongsolancb: '3',
        dtbchk: '0.14',
        dtbtl: '1.55',
        kq: 'BTH',
        trangthai: 1,
    },
    {
        masv: '3119560011',
        hosv: 'Lê Thị',
        tensv: 'A',
        ngaysinh: '2002-08-12',
        chuyennganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1821',
        namthu: '3',
        hkthu: '8',
        solancb: '',
        tongsolancb: '3',
        dtbchk: '0.14',
        dtbtl: '1.55',
        kq: 'BTH',
        trangthai: 1,
    },
    {
        masv: '3119560015',
        hosv: 'Lê Thị',
        tensv: 'A',
        ngaysinh: '2002-08-12',
        chuyennganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1821',
        namthu: '3',
        hkthu: '8',
        solancb: '',
        tongsolancb: '3',
        dtbchk: '0.14',
        dtbtl: '1.55',
        kq: 'BTH',
        trangthai: 1,
    },
    {
        masv: '3119560018',
        hosv: 'Lê Thị',
        tensv: 'A',
        ngaysinh: '2002-08-12',
        chuyennganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1821',
        namthu: '3',
        hkthu: '8',
        solancb: '',
        tongsolancb: '3',
        dtbchk: '0.14',
        dtbtl: '1.55',
        kq: 'BTH',
        trangthai: 1,
    },
    {
        masv: '3119560020',
        hosv: 'Lê Thị',
        tensv: 'A',
        ngaysinh: '2002-08-12',
        chuyennganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1821',
        namthu: '3',
        hkthu: '8',
        solancb: '',
        tongsolancb: '3',
        dtbchk: '0.14',
        dtbtl: '1.55',
        kq: 'BTH',
        trangthai: 1,
    },
    {
        masv: '3119560022',
        hosv: 'Lê Thị',
        tensv: 'A',
        ngaysinh: '2002-08-12',
        chuyennganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1821',
        namthu: '3',
        hkthu: '8',
        solancb: '',
        tongsolancb: '3',
        dtbchk: '0.14',
        dtbtl: '1.55',
        kq: 'BTH',
        trangthai: 1,
    },
    {
        masv: '3119560023',
        hosv: 'Lê Thị',
        tensv: 'A',
        ngaysinh: '2002-08-12',
        chuyennganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1821',
        namthu: '3',
        hkthu: '8',
        solancb: '',
        tongsolancb: '3',
        dtbchk: '0.14',
        dtbtl: '1.55',
        kq: 'BTH',
        trangthai: 1,
    },
    {
        masv: '3119560028',
        hosv: 'Lê Thị',
        tensv: 'A',
        ngaysinh: '2002-08-12',
        chuyennganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1821',
        namthu: '3',
        hkthu: '8',
        solancb: '',
        tongsolancb: '3',
        dtbchk: '0.14',
        dtbtl: '1.55',
        kq: 'BTH',
        trangthai: 1,
    },
    {
        masv: '3119560035',
        hosv: 'Lê Thị',
        tensv: 'A',
        ngaysinh: '2002-08-12',
        chuyennganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1821',
        namthu: '3',
        hkthu: '8',
        solancb: '',
        tongsolancb: '3',
        dtbchk: '0.14',
        dtbtl: '1.55',
        kq: 'BTH',
        trangthai: 1,
    },
    {
        masv: '3119560038',
        hosv: 'Lê Thị',
        tensv: 'A',
        ngaysinh: '2002-08-12',
        chuyennganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1821',
        namthu: '3',
        hkthu: '8',
        solancb: '',
        tongsolancb: '3',
        dtbchk: '0.14',
        dtbtl: '1.55',
        kq: 'BTH',
        trangthai: 1,
    },
]

const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
});

const TableDSSVCanhBao = () => {
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
                accessorKey: 'masv',
                header: 'Mã',
                size: 100,
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,
            },
            {
                accessorKey: 'hosv',
                header: 'Họ',
                size: 150,
                enableEditing: false,


            },
            {
                accessorKey: 'tensv',
                header: 'Tên',
                size: 100,
                enableEditing: false,
            },
            {

                accessorKey: 'ngaysinh',
                header: 'Ngày sinh',
                size: 100,
                enableEditing: false,

            },
            {
                accessorKey: 'chuyennganh',
                header: 'Chuyên ngành',
                size: 100,
                enableEditing: false,
            },
            {

                accessorKey: 'lop',
                header: 'Lớp',
                size: 100,
                enableEditing: false,


            },
            {
                accessorKey: 'namthu',
                header: 'Năm thứ',
                size: 100,
                enableEditing: false,
            },
            {

                accessorKey: 'hkthu',
                header: 'HK thứ',
                size: 100,
                enableEditing: false,


            },
            {
                accessorKey: 'solancb',
                header: 'Số lần CB',
                size: 100,
                enableEditing: false,
            },
            {

                accessorKey: 'tongsolancb',
                header: 'Tổng số lần CB',
                size: 150,
                enableEditing: false,

            },
            {
                accessorKey: 'dtbchk',
                header: 'ĐTB cả HK',
                size: 100,
                enableEditing: false,
            },
            {

                accessorKey: 'dtbtl',
                header: 'ĐTB tích lũy',
                size: 100,
                enableEditing: false,


            },
            {
                accessorKey: 'kq',
                header: 'Kết quả',
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

        renderRowActions: ({ row, table }) => (
            <Box sx={{ display: 'flex', gap: '0.3rem' }}>
                <Link to={"/admin/canhbaohoctap/single/" + row.original.MaCBHT}>
                    <IconButton>
                        <Visibility fontSize="small" />
                    </IconButton>
                </Link>


                <Link to={"/canhbaohoctap/sinhvien/edit/" + row.original.masv}>
                    <IconButton onClick={() => table.setEditingRow(row)}>
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
                {/* <Button
                            disabled={table.getPrePaginationRowModel().rows.length === 0}
                            //export all rows, including from the next page, (still respects filtering and sorting)
                            onClick={() =>
                                handleExportRows(table.getPrePaginationRowModel().rows)
                            }
                            leftIcon={<IconDownload />}
                            variant="filled"
                        >
                            Export All Rows
                        </Button> */}
                {/* <Button
                            disabled={table.getRowModel().rows.length === 0}
                            //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
                            onClick={() => handleExportRows(table.getRowModel().rows)}
                            leftIcon={<IconDownload />}
                            variant="filled"
                        >
                            Export Page Rows
                        </Button> */}
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
                {/* <Button
                            sx={{ backgroundColor: 'green' }}
                            //only export selected rows
                            // onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
                            leftIcon={<IconDownload />}
                            variant="filled"
                        >
                            Create Data
                        </Button> */}
            </Box>

        ),
    });

    return (
        <>
            <MantineReactTable table={table} />
        </>
    )
}

export default TableDSSVCanhBao