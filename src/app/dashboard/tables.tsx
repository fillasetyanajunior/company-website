"use client"
import { AiOutlineLineChart, AiOutlineBarChart, AiOutlineTeam, AiOutlineTags } from "react-icons/ai";
import { useState } from "react";
import { DashboardAction } from "./actions";
import { getCookie } from "cookies-next";
import { Alert, Pagination, Spin } from "antd";

export default function Tables({ params } : { params: { url: string } }) {
    const token:string|undefined = getCookie("token")?.toString()
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(20)
    const [choices, setChoices] = useState(1)   
    const { data, error, isLoading } = DashboardAction({url:params.url, choices:choices, token:token})

    const init = async () => {
        const { Chart, initTE } = await import("tw-elements");
        initTE({ Chart });

        // Data
        const dataChartBarDoubleDatasetsExample = {
            type: "line",
            data: {
                labels: data.date,
                datasets: [
                    {
                        label: "Pengguna",
                        data: data.user,
                        backgroundColor: "#DFDE94",
                        borderColor: "#DFDE94",
                    },
                    {
                        label: "Transaksi Produk",
                        data: data.transactionProduct,
                        backgroundColor: "#94DFD7",
                        borderColor: "#94DFD7",
                    },
                    {
                        label: "Transaksi Layanan",
                        data: data.totaltransactionService,
                        backgroundColor: "#DF9494",
                        borderColor: "#DF9494",
                    },
                    {
                        label: "Garansi Produk Active",
                        data: data.totalwarrantie,
                        backgroundColor: "#94C2DF",
                        borderColor: "#94C2DF",
                    },
                ],
            },
        };

        // Options
        const optionsChartBarDoubleDatasetsExample = {
            options: {
                scales: {
                y:
                    {
                        stacked: false,
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                x:
                    {
                        stacked: false,
                    },
                },
            },
        };

        new Chart(
            document.getElementById("chart"),
            dataChartBarDoubleDatasetsExample,
            optionsChartBarDoubleDatasetsExample
        );
    };
    
    if (error) return <div className="py-10 w-full"><Alert message="Error" description="Data Kosong atau server anda mati, silahkan periksa terlebih dahulu!!!" type="error" showIcon/></div>
    if (isLoading) return <div className="flex justify-center items-center h-10 py-10"><Spin size="large"/></div>
    
    init();
  return (
    <div className="text-black">
        <div className="mb-4">
            <h1 className="text-black text-2xl font-bold tracking-widest">Dashboard</h1>
        </div>
        <div className="grid xl:grid-cols-4 gap-4 mb-4">
            <div className="flex items-center h-16 rounded shadow-xl bg-neutral-50 p-2">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-orange-500">
                    <AiOutlineLineChart className="text-2xl text-white"/>
                </div>
                <div className="ms-3 grid grid-rows-2">
                    <p className="text-[0.9rem] font-bold">Pesanan Layanan</p>
                    <p className="text-[0.8rem]">{data.totaltransactionProduct} Pesanan Layanan</p>
                </div>
            </div>
            <div className="flex items-center h-16 rounded shadow-xl bg-neutral-50 p-2">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-emerald-500">
                    <AiOutlineBarChart className="text-2xl text-white"/>
                </div>
                <div className="ms-3 grid grid-rows-2">
                    <p className="text-[0.9rem] font-bold">Pesanan Produk</p>
                    <p className="text-[0.8rem]">{data.totaltransactionService} Pesanan Produk</p>
                </div>
            </div>
            <div className="flex items-center h-16 rounded shadow-xl bg-neutral-50 p-2">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-red-500">
                    <AiOutlineTeam className="text-2xl text-white"/>
                </div>
                <div className="ms-3 grid grid-rows-2">
                    <p className="text-[0.9rem] font-bold">Pengguna</p>
                    <p className="text-[0.8rem]">{data.totaluser} Pengguna</p>
                </div>
            </div>
            <div className="flex items-center h-16 rounded shadow-xl bg-neutral-50 p-2">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-yellow-500">
                    <AiOutlineTags className="text-2xl text-white"/>
                </div>
                <div className="ms-3 grid grid-rows-2">
                    <p className="text-[0.9rem] font-bold">Garansi Produk Active</p>
                    <p className="text-[0.8rem]">{data.totalwarrantie} Garansi Produk Active</p>
                </div>
            </div>
        </div>
        <div className="mb-4 rounded shadow-xl bg-neutral-50">
            <div className="p-4">
                <h1 className="text-lg font-bold tracking-widest mb-4">Grafik</h1>
                <canvas id="chart"></canvas>
            </div>
        </div>
        <div className="mb-4 rounded shadow-xl bg-neutral-50">
            <div className="p-4">
                <h1 className="text-lg font-bold tracking-widest mb-4">Transaksi Terakhir</h1>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-[0.9rem] font-light">
                                    <thead className="border-b bg-white font-medium">
                                        <tr>
                                        <th scope="col" className="px-6 py-4">#</th>
                                        <th scope="col" className="px-6 py-4">First</th>
                                        <th scope="col" className="px-6 py-4">Last</th>
                                        <th scope="col" className="px-6 py-4">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b bg-neutral-100">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Showing <span>1</span> to <span>8</span> of <span>16</span> entries</p>
                        <Pagination defaultCurrent={data.current_page} total={data.total} pageSize={pageSize} pageSizeOptions={[10, 15, 20, 25, 50, 100]} onShowSizeChange={(e, size) => setPageSize(size) } onChange={(e) => setPageIndex(e)}/>
                        <ul className="list-style-none flex">
                            <li>
                                <a className="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-[0.9rem] text-neutral-500 transition-all duration-300">Previous</a>
                            </li>
                            <li>
                                <a className="relative block rounded bg-transparent px-3 py-1.5 text-[0.9rem] text-neutral-600 transition-all duration-300 hover:bg-neutral-100" href="#!">1</a>
                            </li>
                            <li aria-current="page">
                                <a className="relative block rounded bg-primary-100 px-3 py-1.5 text-[0.9rem] font-medium text-primary-700 transition-all duration-300" href="#!">2 <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">(current)</span>
                            </a>
                            </li>
                            <li>
                                <a className="relative block rounded bg-transparent px-3 py-1.5 text-[0.9rem] text-neutral-600 transition-all duration-300 hover:bg-neutral-100" href="#!">3</a>
                            </li>
                            <li>
                                <a className="relative block rounded bg-transparent px-3 py-1.5 text-[0.9rem] text-neutral-600 transition-all duration-300 hover:bg-neutral-100" href="#!">Next</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
