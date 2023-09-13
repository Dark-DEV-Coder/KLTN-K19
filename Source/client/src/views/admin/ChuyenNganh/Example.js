import "./Example.scss"
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { Box, Button } from '@mantine/core';
import { IconDownload, IconUpload } from '@tabler/icons-react';
import { mkConfig, generateCsv, download } from 'export-to-csv'; //or use your library of choice here
import { MenuItem } from '@mui/material';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Stack,
    TextField,
    Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
//defining columns outside of the component is fine, is stable
// const columns = [
//     {
//         accessorKey: 'id',
//         header: 'ID',
//         size: 40,
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     {
//         accessorKey: 'firstName',
//         header: 'First Name',
//         size: 130,
//     },
//     {
//         accessorKey: 'lastName',
//         header: 'Last Name',
//         size: 130,
//     },
//     {
//         accessorKey: 'company',
//         header: 'Company',
//         size: 200,
//         textAlign: 'center',
//     },
//     {
//         accessorKey: 'city',
//         header: 'City',
//         size: 200,
//     },
//     {
//         accessorKey: 'country',
//         header: 'Country',
//         size: 200,
//     },
// ];


const columns = [
    {
        accessorKey: 'madkcn',
        header: 'Mã',
        size: 10,

    },
    {
        accessorKey: 'nienkhoa',
        header: 'Niên khóa',
        size: 130,
    },
    {
        accessorKey: 'khoahoc',
        header: 'Khóa',
        size: 130,
    },
    {
        accessorKey: 'tgbd',
        header: 'Bắt đầu',
        size: 150,
        textAlign: 'center',
    },
    {
        accessorKey: 'tgkt',
        header: 'Kết thúc',
        size: 150,
    },
    {
        accessorKey: 'nganh',
        header: 'Ngành',
        size: 100,
    },
];


const data = [


    {
        madkcn: 'CN1',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        nganh: 'KTPM',
        trangthai: 1,
    },
    {
        madkcn: 'CN2',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        nganh: 'KHMT',
        trangthai: 1,
    },
    {
        madkcn: 'CN3',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        nganh: 'MMT',
        trangthai: 1,
    },
    {
        madkcn: 'CN4',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        nganh: 'KTPM',
        trangthai: 1,
    },
    {
        madkcn: 'CN5',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        nganh: 'KTPM',
        trangthai: 1,
    },
    {
        madkcn: 'CN6',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        nganh: 'KHMT',
        trangthai: 1,
    },
    {
        madkcn: 'CN7',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        nganh: 'HTTT',
        trangthai: 1,
    },
    {
        madkcn: 'CN8',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        nganh: 'KTPM',
        trangthai: 1,
    },
    {
        madkcn: 'CN9',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        nganh: 'KTPM',
        trangthai: 1,
    },
    {
        madkcn: 'CN10',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        nganh: 'KTPM',
        trangthai: 1,
    },
    {
        madkcn: 'CN11',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        nganh: 'KTPM',
        trangthai: 1,
    },
    {
        madkcn: 'CN12',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        nganh: 'KTPM',
        trangthai: 1,
    },
]

const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
});

const Example = () => {
    const handleExportRows = (rows) => {
        const rowData = rows.map((row) => row.original);
        const csv = generateCsv(csvConfig)(rowData);
        download(csvConfig)(csv);
    };

    const handleExportData = () => {
        const csv = generateCsv(csvConfig)(data);
        download(csvConfig)(csv);
    };

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



        renderRowActions: ({ row }) => (
            <Box sx={{ display: 'flex', gap: '0.3rem' }}>
                <IconButton onClick={() => console.log(row.original.name)}>
                    <Edit />
                </IconButton>
                <IconButton onClick={() => console.log(row.original.name)}>
                    <Delete sx={{ color: 'red' }} />
                </IconButton>
            </Box>

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

    return <MantineReactTable table={table}
    />;
};

export default Example;