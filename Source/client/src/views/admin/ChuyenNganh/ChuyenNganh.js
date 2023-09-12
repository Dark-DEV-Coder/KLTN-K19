import HeaderMain from "../HeaderMain/HeaderMain";
import "./ChuyenNganh.scss"
import "./Example"
import { Link } from "react-router-dom";

import { useMemo, useState, useEffect } from 'react';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import Example from "./Example";




const data = [
    {
        madkcn: 'John',
        nienkhoa: 30,
        thoigianbd: '28/10/2022',
        thoigiankt: '01/12/2023',
        nganh: 'CNTT',
        status: 'done'
    },
    {
        madkcn: 'John2',
        nienkhoa: 30,
        thoigianbd: '28/10/2022',
        thoigiankt: '01/12/2023',
        nganh: 'CNTT',
        status: 'done'
    },
    {
        madkcn: 'John3',
        nienkhoa: 30,
        thoigianbd: '28/10/2022',
        thoigiankt: '01/12/2023',
        nganh: 'CNTT',
        status: 'done'
    },
    {
        madkcn: 'John4',
        nienkhoa: 30,
        thoigianbd: '28/10/2022',
        thoigiankt: '01/12/2023',
        nganh: 'CNTT',
        status: 'done'
    },
    {
        madkcn: 'John5',
        nienkhoa: 30,
        thoigianbd: '28/10/2022',
        thoigiankt: '01/12/2023',
        nganh: 'CNTT',
        status: 'done'
    },
    {
        madkcn: 'John6',
        nienkhoa: 30,
        thoigianbd: '28/10/2022',
        thoigiankt: '01/12/2023',
        nganh: 'CNTT',
        status: 'done'
    },
    {
        madkcn: 'John7',
        nienkhoa: 30,
        thoigianbd: '28/10/2022',
        thoigiankt: '01/12/2023',
        nganh: 'CNTT',
        status: 'done'
    },
    {
        madkcn: 'John8',
        nienkhoa: 30,
        thoigianbd: '28/10/2022',
        thoigiankt: '01/12/2023',
        nganh: 'CNTT',
        status: 'done'
    },
]
const ChuyenNganh = () => {

    const columns = useMemo(
        () => [
            {
                accessorKey: 'madkcn', //simple recommended way to define a column
                header: 'Mã',
                size: 20,
                mantineTableHeadCellProps: { sx: { color: 'green' }, align: 'start' }, //optional custom props
                Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
            },
            {
                accessorFn: (row) => row.nienkhoa, //alternate way
                id: 'nienkhoa', //id required if you use accessorFn instead of accessorKey
                header: 'Khóa',
                size: 20,
                // mantineTableHeadCellProps: { align: 'center', },
                Header: () => <i>Khóa</i>, //optional custom header render
            },
            {
                accessorFn: (row) => row.thoigianbd, //alternate way
                id: 'thoigianbd', //id required if you use accessorFn instead of accessorKey
                header: 'Bắt đầu',
                size: 20,
                // mantineTableHeadCellProps: { align: 'center', },
                Header: () => <i>Bắt đầu</i>, //optional custom header render
            },
            {
                accessorFn: (row) => row.thoigiankt, //alternate way
                id: 'thoigiankt', //id required if you use accessorFn instead of accessorKey
                header: 'Kết thúc',
                size: 20,
                // mantineTableHeadCellProps: { align: 'center', },
                Header: () => <i>Kết thúc</i>, //optional custom header render
            },
            {
                accessorFn: (row) => row.nganh, //alternate way
                id: 'nganh', //id required if you use accessorFn instead of accessorKey
                header: 'Ngành',
                size: 20,
                // mantineTableHeadCellProps: { align: 'center', },
                Header: () => <i>Ngành</i>, //optional custom header render
            },
            {
                accessorFn: (row) => row.status, //alternate way
                id: 'status', //id required if you use accessorFn instead of accessorKey
                header: 'Trạng thái',
                size: 20,
                // mantineTableHeadCellProps: { align: 'center', },
                Header: () => <i>Trạng thái</i>, //optional custom header render
            },
            {

                id: 'action', //id required if you use accessorFn instead of accessorKey
                header: 'Action',
                size: 20,
                // mantineTableHeadCellProps: { align: 'center', },
                Header: () => <i> Acation


                </i>, //optional custom header render
            },
        ],
        [],
    );

    //optionally, you can manage any/all of the table state yourself
    const [rowSelection, setRowSelection] = useState({});

    useEffect(() => {
        //do something when the row selection changes
    }, [rowSelection]);

    const table = useMantineReactTable({
        columns,
        data,
        enableColumnOrdering: true, //enable some features
        enableRowSelection: true,
        enablePagination: false, //disable a default feature
        onRowSelectionChange: setRowSelection, //hoist row selection state to your state
        state: { rowSelection },
    });


    return (
        <>
            <main className="main2">
                {/* <HeaderMain title={'Chuyên ngành'} /> */}
                <div className="head-title">
                    <div className="left">
                        <h1>CHUYÊN NGÀNH</h1>
                        <ul className="breadcrumb">
                            <li>
                                <Link>Dashboard</Link>
                            </li>
                            <li><i className='bx bx-chevron-right'></i></li>
                            <li>
                                <Link className="active" >Chuyên Ngành</Link>
                            </li>
                        </ul>
                    </div>
                    <a href="#" className="btn-download">
                        <i className='bx bxs-cloud-download'></i>
                        <span className="text">Create Data</span>
                    </a>
                </div>

                {/* <MantineReactTable table={table} />; */}


                <Example />

            </main >
        </>
    )
}
export default ChuyenNganh;