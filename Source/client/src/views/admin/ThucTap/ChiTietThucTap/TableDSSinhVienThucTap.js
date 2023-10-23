
import "./TableDSSinhVienThucTap.scss";
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
        masv: '3119560010',
        hosv: 'Lê Thị',
        tensv: 'A',
        lop: 'DCT1192',
        csthuctap: 'Công ty cổ phần Hinnova',
        website: 'http://hinnova.com.vn',
        sdt: '0936362711',
        email: 'abc@gmail.com',
        diachi: '181 Đ. Cao Thắng, Phường 12, Quận 10, Thành phố Hồ Chí Minh',
        trangthai: 1,
    },
    {
        masv: '3119560011',
        hosv: 'Lê Thị',
        tensv: 'A',
        lop: 'DCT1192',
        csthuctap: 'Công ty cổ phần Hinnova',
        website: 'http://hinnova.com.vn',
        sdt: '0936362711',
        email: 'abc@gmail.com',
        diachi: '181 Đ. Cao Thắng, Phường 12, Quận 10, Thành phố Hồ Chí Minh',
        trangthai: 1,
    },
    {
        masv: '3119560019',
        hosv: 'Lê Thị',
        tensv: 'A',
        lop: 'DCT1192',
        csthuctap: 'Công ty cổ phần Hinnova',
        website: 'http://hinnova.com.vn',
        sdt: '0936362711',
        email: 'abc@gmail.com',
        diachi: '181 Đ. Cao Thắng, Phường 12, Quận 10, Thành phố Hồ Chí Minh',
        trangthai: 1,
    },
    {
        masv: '3119560002',
        hosv: 'Lê Thị',
        tensv: 'A',
        lop: 'DCT1192',
        csthuctap: 'Công ty cổ phần Hinnova',
        website: 'http://hinnova.com.vn',
        sdt: '0936362711',
        email: 'abc@gmail.com',
        diachi: '181 Đ. Cao Thắng, Phường 12, Quận 10, Thành phố Hồ Chí Minh',
        trangthai: 1,
    },
    {
        masv: '3119560023',
        hosv: 'Lê Thị',
        tensv: 'A',
        lop: 'DCT1192',
        csthuctap: 'Công ty cổ phần Hinnova',
        website: 'http://hinnova.com.vn',
        sdt: '0936362711',
        email: 'abc@gmail.com',
        diachi: '181 Đ. Cao Thắng, Phường 12, Quận 10, Thành phố Hồ Chí Minh',
        trangthai: 1,
    },
    {
        masv: '3119560025',
        hosv: 'Lê Thị',
        tensv: 'A',
        lop: 'DCT1192',
        csthuctap: 'Công ty cổ phần Hinnova',
        website: 'http://hinnova.com.vn',
        sdt: '0936362711',
        email: 'abc@gmail.com',
        diachi: '181 Đ. Cao Thắng, Phường 12, Quận 10, Thành phố Hồ Chí Minh',
        trangthai: 1,
    },
    {
        masv: '3119560027',
        hosv: 'Lê Thị',
        tensv: 'A',
        lop: 'DCT1192',
        csthuctap: 'Công ty cổ phần Hinnova',
        website: 'http://hinnova.com.vn',
        sdt: '0936362711',
        email: 'abc@gmail.com',
        diachi: '181 Đ. Cao Thắng, Phường 12, Quận 10, Thành phố Hồ Chí Minh',
        trangthai: 1,
    },
    {
        masv: '3119560029',
        hosv: 'Lê Thị',
        tensv: 'A',
        lop: 'DCT1192',
        csthuctap: 'Công ty cổ phần Hinnova',
        website: 'http://hinnova.com.vn',
        sdt: '0936362711',
        email: 'abc@gmail.com',
        diachi: '181 Đ. Cao Thắng, Phường 12, Quận 10, Thành phố Hồ Chí Minh',
        trangthai: 1,
    },
    {
        masv: '3119560031',
        hosv: 'Lê Thị',
        tensv: 'A',
        lop: 'DCT1192',
        csthuctap: 'Công ty cổ phần Hinnova',
        website: 'http://hinnova.com.vn',
        sdt: '0936362711',
        email: 'abc@gmail.com',
        diachi: '181 Đ. Cao Thắng, Phường 12, Quận 10, Thành phố Hồ Chí Minh',
        trangthai: 1,
    },
    {
        masv: '3119560032',
        hosv: 'Lê Thị',
        tensv: 'A',
        lop: 'DCT1192',
        csthuctap: 'Công ty cổ phần Hinnova',
        website: 'http://hinnova.com.vn',
        sdt: '0936362711',
        email: 'abc@gmail.com',
        diachi: '181 Đ. Cao Thắng, Phường 12, Quận 10, Thành phố Hồ Chí Minh',
        trangthai: 1,
    },
    {
        masv: '3119560036',
        hosv: 'Lê Thị',
        tensv: 'A',
        lop: 'DCT1192',
        csthuctap: 'Công ty cổ phần Hinnova',
        website: 'http://hinnova.com.vn',
        sdt: '0936362711',
        email: 'abc@gmail.com',
        diachi: '181 Đ. Cao Thắng, Phường 12, Quận 10, Thành phố Hồ Chí Minh',
        trangthai: 1,
    },
    {
        masv: '3119560039',
        hosv: 'Lê Thị',
        tensv: 'A',
        lop: 'DCT1192',
        csthuctap: 'Công ty cổ phần Hinnova',
        website: 'http://hinnova.com.vn',
        sdt: '0936362711',
        email: 'abc@gmail.com',
        diachi: '181 Đ. Cao Thắng, Phường 12, Quận 10, Thành phố Hồ Chí Minh',
        trangthai: 1,
    },
]

const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
});

const TableDSSinhVienThucTap = () => {
    const [trangthaiCty, SetTrangthaiCty] = useState(1)
    const onChangeSelect = (event, SetSelect) => {
        let changeValue = event.target.value;
        SetSelect(changeValue);
    }
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
                size: 100,
                enableEditing: false,
            },
            {
                accessorKey: 'tensv',
                header: 'Tên',
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
                accessorKey: 'csthuctap',
                header: 'Cơ sở thực tập',
                size: 200,
                enableEditing: false,
            },
            {
                accessorKey: 'website',
                header: 'Website',
                size: 100,
                enableEditing: false,
            },
            {
                accessorKey: 'sdt',
                header: 'Điện thoại',
                size: 100,
                enableEditing: false,
            },
            {
                accessorKey: 'email',
                header: 'Email',
                size: 130,
                enableEditing: false,
            },

            {
                accessorKey: 'diachi',
                header: 'Địa chỉ',
                size: 250,
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
                <Link onClick={() => table.setEditingRow(row)}>
                    <IconButton>
                        <Visibility fontSize="small" />
                    </IconButton>
                </Link>
                <Link to={"/admin/thuctap/edit/sinhvien/" + row.original.masv}>
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

                <select value={trangthaiCty} className="select-btn" onChange={(event) => onChangeSelect(event, SetTrangthaiCty)} >
                    <option value='1'>Trong danh sách</option>
                    <option value='0'>Ngoài danh sách</option>
                </select>
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

export default TableDSSinhVienThucTap