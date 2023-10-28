"use client"
import { useState, SyntheticEvent } from "react"
import { DeleteAction } from "./actions"
import { Products } from "./interface"
import { Button, Modal } from "antd"
import { getCookie } from "cookies-next"

export default function Delete({ params } : { params: { product: Products, url: string } }) {
    const [modal, setModal] = useState(false);
    const token:string|undefined = getCookie("token")?.toString()
    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault()
        const res = DeleteAction({product: params.product, url: params.url, token: token})
        res.then(function (data) {
            console.log(data);
            setModal(false)
        })
    }
    return(
        <div>
            <Button onClick={() => setModal(true)} className="bg-red-500 flex justify-center items-center rounded text-[0.8rem] text-white">
                Hapus
            </Button>
            <Modal title="Ubah Produk" centered open={modal} onCancel={() => setModal(false)} onOk={handleSubmit}>
                <p>Apakah ada yakin ingin menghapus {params.product.name}</p>
            </Modal>
        </div>
    )
}