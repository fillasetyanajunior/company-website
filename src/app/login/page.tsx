import type { Metadata } from "next"
import Forms from "./forms"

export const metadata: Metadata = {
  title: "Login - Just Code In Web",
}

export default async function Login() {
    const url = process.env.APP_URL_API
    return(
        <div className="h-screen mx-auto md:px-6 flex items-center">
            <section className="mb-32 text-center lg:text-left m-auto">
                <div className="px-6 py-12 md:px-12">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div className="mt-12 lg:mt-0">
                            <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-full" alt="Sample image" />
                        </div>
                        <div className="mb-12 lg:mb-0">
                            <div className="block rounded-lg bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:px-12">
                                <div className="flex items-center justify-center">
                                    <p className="mb-14 text-4xl font-bold">Masuk</p>
                                </div>
                                <Forms params={{url: url}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}