import Add from "./add"
import type { Metadata } from "next"
import Tables from "./tables"

export const metadata: Metadata = {
  title: "Produk - Just Code In Web",
}

export default async function Product() {
    const url: string = String(process.env.APP_URL_API)
    return(
        <div className="text-black">
            <div className="mb-4 flex justify-between">
                <h1 className="text-2xl font-bold tracking-widest">Produk</h1>
                <Add params={{url: url}}/>
            </div>
            <div className="mb-4 rounded shadow-xl">
                <div className="p-4">
                    <h1 className="text-lg font-bold tracking-widest mb-4">List Produk</h1>
                    <Tables params={{url: url}}/>
                </div>
            </div>
        </div>
    )
}