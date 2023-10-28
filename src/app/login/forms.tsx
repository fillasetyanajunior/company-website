"use client"
import { Form, Input, Button, Alert } from "antd";
import { useState } from "react";
import { LoginAction } from "./actions";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function Forms({ params } : { params: { url: string } }) {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()
    
    async function handleSubmit() {
        const res = LoginAction({login: form, url: params.url})
        res.then(function (data) {
            if (data.status_code == 200) {
                setIsLoading(true)
                setCookie("token", data.access_token)
                setCookie("name", data.name)
                setCookie("email", data.email)
                router.push('/dashboard')
            }
        })
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
        {
            isLoading ? <div className="py-10 w-full"><Alert message="Error" description="Data Kosong atau server anda mati, silahkan periksa terlebih dahulu!!!" type="error" showIcon/></div>
            : <Form
                layout="vertical"
                onFinish={handleSubmit}
                onFinishFailed={onFinishFailed}
                initialValues={form}
                autoComplete="off">
                <Form.Item className="my-5 mx-2" label="Email">
                    <Input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})}/>
                </Form.Item>
                <Form.Item className="my-5 mx-2" label="Password">
                    <Input placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})}/>
                </Form.Item>
                <div className="my-10 mx-2">
                    <Button htmlType="submit" className="flex justify-center items-center w-full rounded bg-[#ffc145] px-6 pt-2.5 pb-2 text-md font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#ffc145] transition duration-150 ease-in-out hover:bg-[#05445b] hover:shadow-[0_8px_9px_-4px_#05445b,0_4px_18px_0_#05445b] focus:outline-none focus:ring-0">
                        Masuk
                    </Button>
                </div>
                <div>
                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">Tidak punya akun?
                        <a href="/register" className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"> Daftar</a>
                    </p>
                </div>
            </Form>
        }
        </>
    )
}
