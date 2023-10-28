import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Transaksi Produk - Just Code In Web",
}

export default function TransactionProduct() {
    return (
        <div>
            <div className="mb-4">
                <h1 className="text-2xl font-bold tracking-widest">Transaksi Produk</h1>
            </div>
            <div className="mb-4 rounded shadow-xl">
                <div className="p-4">
                    <h1 className="text-black text-lg font-bold tracking-widest mb-4">List Transaksi</h1>
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-left text-sm font-light">
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
                            <ul className="list-style-none flex">
                                <li>
                                    <a className="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300">Previous</a>
                                </li>
                                <li>
                                    <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100" href="#!">1</a>
                                </li>
                                <li aria-current="page">
                                    <a className="relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300" href="#!">2 <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">(current)</span>
                                </a>
                                </li>
                                <li>
                                    <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100" href="#!">3</a>
                                </li>
                                <li>
                                    <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100" href="#!">Next</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )     
}