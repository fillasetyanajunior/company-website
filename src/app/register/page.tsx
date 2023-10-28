"use client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Register - Just Code In Web",
}

export default function Register() {
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
                                    <p className="mb-14 text-4xl font-bold">Daftar</p>
                                </div>
                                <form>
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <input type="text" className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="full_name" placeholder="Nama Lengkap"/>
                                        <label htmlFor="full_name" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-[#05445b] peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">Nama Lengkap</label>
                                    </div>
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <input type="email" className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="email" placeholder="Email"/>
                                        <label htmlFor="email" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-[#05445b] peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">Email</label>
                                    </div>
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <input type="password" className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="password" placeholder="Password"/>
                                        <label htmlFor="password" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-[#05445b] peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">Password</label>
                                    </div>
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <input type="password" className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="password_confirmation" placeholder="Password Konfirmasi"/>
                                        <label htmlFor="password_confirmation" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-[#05445b] peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">Password Konfirmasi</label>
                                    </div>
                                    <div className="grid grid-cols-12 gap-5">
                                        <div className="col-span-2 mb-6">
                                            <select data-te-select-init data-te-select-filter="true">
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                                <option value="4">Four</option>
                                                <option value="5">Five</option>
                                                <option value="6">Six</option>
                                                <option value="7">Seven</option>
                                                <option value="8">Eight</option>
                                            </select>
                                        </div>
                                        <div className="relative mb-6 col-span-10" data-te-input-wrapper-init>
                                            <input type="number" className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="number_phone" placeholder="Nomer Hp"/>
                                            <label htmlFor="number_phone" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-[#05445b] peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">Nomer Hp</label>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className="mb-6 inline-block w-full rounded bg-[#ffc145] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#ffc145] transition duration-150 ease-in-out hover:bg-[#05445b] hover:shadow-[0_8px_9px_-4px_#05445b,0_4px_18px_0_#05445b] focus:outline-none focus:ring-0">Daftar</button>
                                    </div>
                                    <div>
                                        <p className="mb-0 mt-2 pt-1 text-sm font-semibold">Punya akun?
                                            <a href="/login" className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"> Masuk</a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}