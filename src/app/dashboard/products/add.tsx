"use client"
import { useState } from "react"
import { AddAction } from "./actions"
import { Button, Form, Input, Modal, Upload, message } from "antd"
import { getCookie } from "cookies-next"

export default function Add({ params } : { params: { url: string } }) {
    const [modal, setModal] = useState(false);
    const [form, setForm] = useState({
        product_id: '',
        name: '',
        type: '',
        technology: '',
        price: 0,
        thumbnail: '',
    })
    const token:string|undefined = getCookie("token")?.toString()
    async function handleSubmit() {
        const res = AddAction({product: form, url: params.url, token: token})
        res.then(function (data) {
            console.log(data);
        })
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    const handleChange = (files: any) => {
        const file = files.target.files[0];
        message.success(`${file.name} file uploaded successfully`);
        setForm({
            ...form,
            thumbnail: file
        });
    };
    return(
        <div>
            <Button onClick={() => setModal(true)} className="bg-teal-500 rounded text-[1rem] text-white flex justify-center items-center">
                Tambah
            </Button>
            <Modal title="Tambah Produk" centered open={modal} footer={null} onCancel={() => setModal(false)}>
                <Form
                    layout="vertical"
                    onFinish={handleSubmit}
                    onFinishFailed={onFinishFailed}
                    initialValues={form}
                    autoComplete="off">
                    <Form.Item className="my-3 mx-2" label="Nama Produk">
                        <Input placeholder="Nama Produk" onChange={(e) => setForm({...form, name: e.target.value})}/>
                    </Form.Item>
                    <Form.Item className="my-3 mx-2" label="Tipe Produk">
                        <Input placeholder="Tipe Produk" onChange={(e) => setForm({...form, type: e.target.value})}/>
                    </Form.Item>
                    <Form.Item className="my-3 mx-2" label="Teknologi">
                        <Input placeholder="Teknologi" onChange={(e) => setForm({...form, technology: e.target.value})}/>
                    </Form.Item>
                    <Form.Item className="my-3 mx-2" label="Harga Produk">
                        <Input placeholder="Harga Produk" onChange={(e) => setForm({...form, price: parseInt(e.target.value)})}/>
                    </Form.Item>
                    <Form.Item className="my-3 mx-2" label="Unggah Gambar">
                        <input className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary" type="file" multiple onChange={handleChange} />
                    </Form.Item>
                    <div className="flex justify-end item-end mt-3 mx-2">
                        <div className="text-right">
                            <Button htmlType="submit">
                                Ubah
                            </Button>
                        </div>
                    </div>
                </Form>
            </Modal>
        </div>
    )
}