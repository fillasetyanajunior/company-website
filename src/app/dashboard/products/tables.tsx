"use client"
import Delete from "./delete"
import { Pagination, Spin, Alert, Table, Space } from "antd"
import { useState } from "react";
import { FieldProduct } from "./interface";
import type { ColumnsType } from "antd/es/table";
import Edit from "./edit";
import { ProductAction } from "./actions";
import { getCookie } from "cookies-next";

export default function Tables({ params } : { params: { url: string } }) {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(20)
    const token:string|undefined = getCookie("token")?.toString()
    const { data, error, isLoading }  = ProductAction({url : params.url, pageIndex : pageIndex, pageSize : pageSize, token: token})
    const columns: ColumnsType<FieldProduct> = [
        {
            title: "#",
            dataIndex: "no",
            key: "no",
            width: "5%",
            align: "center",
        },
        {
            title: "Product ID",
            dataIndex: "product_id",
            key: "product_id",
        },
        {
            title: "Nama",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Tipe",
            dataIndex: "type",
            key: "type",
        },
        {
            title: "Teknologi",
            dataIndex: "technology",
            key: "technology",
        },
        {
            title: "Harga",
            key: "price",
            dataIndex: "price",
        },
        {
            title: "Action",
            key: "action",
            width: "10%",
            render: (_, record) => (
                <Space size="middle">
                    <Edit params={{product: record, url: params.url }}/>
                    <Delete params={{product: record, url: params.url }}/>
                </Space>
            ),
        },
    ];

    if (error) return <div className="py-10 w-full"><Alert message="Error" description="Data Kosong atau server anda mati, silahkan periksa terlebih dahulu!!!" type="error" showIcon/></div>
    if (isLoading) return <div className="flex justify-center items-center h-10 py-10"><Spin size="large"/></div>

    function formatData(data: any) {
        let result  = [];
        let id      = null;
        
        if (data.from == 1) {
            id = 1
        } else {
            id = data.from
        }

        for (let key in data.data) {
            let item = data.data[key];

            let newItem = {
                key: item.product_id,
                no: id++,
                product_id: item.product_id,
                name: item.name,
                type: item.type,
                technology: item.technology,
                price: item.price,
                thumbnail: item.thumbnail,
            };

            result.push(newItem);
        }

        return result;
    }

    let datatable = formatData(data)

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <Table columns={columns} dataSource={datatable} pagination={false}/>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <p>Showing <span>{data.from}</span> to <span>{data.to}</span> of <span>{data.total}</span> entries</p>
                <Pagination defaultCurrent={data.current_page} total={data.total} pageSize={pageSize} pageSizeOptions={[10, 15, 20, 25, 50, 100]} onShowSizeChange={(e, size) => setPageSize(size) } onChange={(e) => setPageIndex(e)} />
            </div>
        </div>
    )
}
