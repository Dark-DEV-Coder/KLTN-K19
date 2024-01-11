import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import React, { useMemo } from 'react';
import { Box, Button } from '@mantine/core';
import { IconDownload, IconUpload } from '@tabler/icons-react';
import { mkConfig, generateCsv, download } from 'export-to-csv'; //or use your library of choice here
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useEffect } from 'react';
import { fetchAllThucTap, fetchDeleteThucTap, fetchUpdateThucTap } from "../GetData"
import { IconButton } from '@mui/material';
import { Delete, Edit, Visibility } from '@mui/icons-material';
import moment from "moment";

// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
});

const TableThucTap = (props) => {
    const accessToken = props.accessToken;
    const [listData, setListData] = useState([]);

    // component didmount
    useEffect(() => {
        getListThucTap();
        getUpdateThucTap();
    }, []);

    const getListThucTap = async () => {
        const headers = { 'x-access-token': accessToken };
        let res = await fetchAllThucTap(headers);
        if (res && res.data && res.data.DanhSach) {
            setListData(res.data.DanhSach)
        }
    }
    const getUpdateThucTap = async () => {
        const headers = { 'x-access-token': accessToken };
        let res = await fetchUpdateThucTap(headers);
    }

    const [ma_xoa, setMa_xoa] = useState({})
    const [open, setOpen] = useState(false);
    const handleClickOpen = (row) => {
        setOpen(true);
        setMa_xoa(row)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteRows = async (row) => {
        const headers = { 'x-access-token': accessToken };
        let res = await fetchDeleteThucTap(headers, row.original.MaDKTT)
        if (res.status === true) {
            toast.success(res.message)
            getListThucTap()
            setOpen(false);
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
        const csv = generateCsv(csvConfig)(listData);
        download(csvConfig)(csv);
    };
    const columns = useMemo(
        () => [
            {
                accessorKey: 'MaDKTT',
                header: 'Mã',
                size: 100,
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,
            },
            {
                accessorKey: 'Ten',
                header: 'Tên',
                size: 330,
                enableEditing: false,
            },
            {

                accessorKey: 'NienKhoa',
                header: 'Niên khóa',
                size: 100,
                enableEditing: false,
            },

            {

                accessorKey: 'ThoiGianBD',
                accessorFn: (dataRow) => moment(dataRow.ThoiGianBD).format("DD-MM-YYYY"),
                header: 'Thời gian bắt đầu',
                size: 100,
                enableEditing: false,
            },

            {

                accessorKey: 'ThoiGianKT',
                accessorFn: (dataRow) => moment(dataRow.ThoiGianKT).format("DD-MM-YYYY"),
                header: 'Thời gian kết thúc',
                size: 100,
                enableEditing: false,
            },

        ]
    );

    const table = useMantineReactTable({
        columns,
        data: listData.reverse(),
        enableRowSelection: true,
        columnFilterDisplayMode: 'popover',
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        positionActionsColumn: 'last',
        enableColumnActions: true,
        enableRowActions: true,



        renderRowActions: ({ row, table }) => (
            <Box sx={{ display: 'flex', gap: '0.3rem' }}>
                <Link to={"/admin/thuctap/single/" + row.original.MaDKTT}>
                    <IconButton>
                        <Visibility fontSize="small" />
                    </IconButton>
                </Link>


                <Link to={"/admin/thuctap/edit/" + row.original.MaDKTT}>
                    <IconButton onClick={() => table.setEditingRow(row)}>
                        <Edit fontSize="small" />
                    </IconButton>
                </Link>

                {/* <IconButton onClick={() => handleDeleteRows(row)}> */}
                <IconButton onClick={() => handleClickOpen(row)}>
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
                {/* <Button
                    color="lightblue"
                    //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                    onClick={handleExportData}
                    leftIcon={<IconUpload />}
                    variant="filled"
                >
                    Export All Data
                </Button> */}


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


                {/* <Button
                    disabled={
                        !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
                    }
                    //only export selected rows
                    onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
                    leftIcon={<IconUpload />}
                    variant="filled"
                >
                    Export Selected Rows
                </Button> */}

                {/* <Button
                    //only export selected rows
                    // onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
                    leftIcon={<IconDownload />}
                    variant="filled"
                >
                    Import Data
                </Button> */}
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
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" style={{ color: 'red' }}>
                    {"Xóa dữ liệu"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Dữ liệu bị xóa sẽ không thể hồi phục lại.
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        Bạn có chắc chắn muốn xóa dữ liệu này ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} style={{ background: 'red' }}>Từ chối</Button>
                    <Button onClick={() => handleDeleteRows(ma_xoa)} autoFocus>
                        Đồng ý
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default TableThucTap