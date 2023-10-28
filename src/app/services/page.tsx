"use client"
import Service_1 from "@/assets/services/servies-1.jpg"
import Service_2 from "@/assets/services/servies-2.jpg"
import Service_3 from "@/assets/services/servies-3.jpg"
import type { Metadata } from "next"
import { AiOutlineCheck } from "react-icons/ai";
import { FaLaravel, FaReact } from "react-icons/fa" 
import { BiLogoFlutter } from "react-icons/bi"
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Layanan - Just Code In Web",
}

export default function Service() {
    return (
        <div>
            <div className="mx-auto md:px-6 bg-[url('../assets/banner/banner-2.jpg')] relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[500px]">
                <section className="py-24">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
                        <div className="flex h-full items-center justify-center">
                            <div className="px-6 text-center text-white md:px-12">
                                <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight">Layanan</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="mb-12 mx-auto md:px-6 text-white bg-[#05445b]">
                <section className="py-24 text-center lg:text-left container m-auto">
                    <div className="grid gap-x-6 lg:grid-cols-3">
                        <div className="mb-12 lg:mb-0">
                            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
                                <img src={Service_1.src} className="w-full" />
                                <a href="#!">
                                    <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                                </a>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Membuat Website Baru</h5>
                            <p className="text-neutral-300">
                                Anda bisa membuat website dengan kebutuhan anda serta fitur apa saja yang bisa anda masukkan dalam website anda.
                                Untuk harga dihitung dari tingkat kesulitan website anda dan waktu pengerjaan akan di sesuaikan juga.
                            </p>
                        </div>
                        <div className="mb-12 lg:mb-0">
                            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
                                <img src={Service_2.src} className="w-full" />
                                <a href="#!">
                                    <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                                </a>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Migrasi Website Lama</h5>
                            <p className="text-neutral-300">
                                Anda bisa migrasi website lama anda yang lebih moderen dan lebih menarik dan interaktif ke pengguna.
                                Untuk harga dihitung dari seberapa kompleks migrasi website lama anda dan waktu pengerjaan akan di sesuaikan juga.
                            </p>
                        </div>
                        <div className="mb-12 lg:mb-0">
                            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
                                <img src={Service_3.src} className="w-full" />
                                <a href="#!">
                                    <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                                </a>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Aplikasi Mobile</h5>
                            <p className="text-neutral-300">
                                Anda bisa membuat aplikasi mobile dengan kebutuhan anda serta fitur apa saja yang bisa anda masukkan dalam aplikasi mobile anda.
                                Untuk harga dihitung dari tingkat kesulitan website anda dan waktu pengerjaan akan di sesuaikan juga.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="my-12 md:px-6 text-white">
                <section className="py-24 text-center container m-auto">
                    <h2 className="mb-16 text-3xl font-bold">Teknologi yang kami <span className="text-[#ffc045]">gunakan</span></h2>
                    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 inline-block rounded-md bg-[#ffc045] p-4 text-primary">
                                <FaLaravel className="h-7 w-7"/>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Laravel</h5>
                            <p className="text-neutral-300">
                                Laravel kami gunakan untuk membangun website bari dari sisi tampilan ataupun dari balik layar website.
                            </p>
                        </div>
                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 inline-block rounded-md bg-[#ffc045] p-4 text-primary">
                                <FaReact className="w-6 h-6"/>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">React Js</h5>
                            <p className="text-neutral-300">
                                React Js kami gunakan untuk membangun tampilan utama dari website anda
                            </p>
                        </div>
                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 inline-block rounded-md bg-[#ffc045] p-4 text-primary">
                                <BiLogoFlutter className="w-6 h-6"/>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Flutter</h5>
                            <p className="text-neutral-300">
                                Flutter kami gunakan untuk membangun aplikasi mobile baik itu android maupun IOS.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="my-12 mx-auto md:px-6 bg-[#05445b]">
                <section className="py-24 container m-auto">
                    <h2 className="mb-12 text-center text-3xl font-bold text-white">Paket</h2>
                    <ul className="mb-12 flex list-none flex-col flex-wrap pl-0 md:flex-row" role="tablist" data-te-nav-ref>
                        <li role="presentation" className="flex-grow basis-0 text-center">
                            <a href="#choices-1" className="my-2 block rounded text-white bg-[#ffc045] px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight data-[te-nav-active]:!bg-[#ffc145b3] data-[te-nav-active]:text-white md:mr-4" id="choices-tab-1" data-te-toggle="pill" data-te-target="#choices-1" role="tab" aria-controls="choices-1" aria-selected="true" data-te-nav-active>Paket Basic</a>
                        </li>
                        <li role="profile" className="flex-grow basis-0 text-center">
                            <a href="#choices-2" className="my-2 block rounded text-white bg-[#ffc045] px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight data-[te-nav-active]:!bg-[#ffc145b3] data-[te-nav-active]:text-white md:mr-4" id="choices-tab-2" data-te-toggle="pill" data-te-target="#choices-2" role="tab" aria-controls="choices-2" aria-selected="false">Paket Complete</a>
                        </li>
                    </ul>
                    <div className="mb-6">
                        <div className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block" id="choices-1" role="tabpanel" aria-labelledby="choices-tab-1" data-te-tab-active>
                            <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
                                <div className="mb-6 lg:mb-0">
                                    <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                        <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center">
                                            <p className="mb-4 text-sm uppercase">
                                                <strong>Laravel</strong>
                                            </p>
                                            <button type="button" className="inline-block w-full rounded bg-[#065471] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-[#ffc045] focus:bg-[#065471] focus:outline-none focus:ring-0 active:bg-[hsl(0,0%,90%)]">Buy</button>
                                        </div>
                                        <div className="p-6">
                                            <ol className="list-inside">
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Konsultasi Project
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Wareframe
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Desain UI/UX
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Free Revisi 3X
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Free Development ke server
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Free Maintenance selama 1.5 tahun
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6 lg:mb-0">
                                    <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                        <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center">
                                            <p className="mb-4 text-sm uppercase">
                                                <strong>React Js</strong>
                                            </p>
                                            <button type="button" className="inline-block w-full rounded bg-[#065471] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-[#ffc045] focus:bg-[#065471] focus:outline-none focus:ring-0 active:bg-[hsl(0,0%,90%)]">Buy</button>
                                        </div>
                                        <div className="p-6">
                                            <ol className="list-inside">
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Konsultasi Project
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Wareframe
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Desain UI/UX
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Free Revisi 3X
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Free Development ke server
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Free Maintenance selama 1.5 tahun
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6 lg:mb-0">
                                    <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                        <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center">
                                            <p className="mb-4 text-sm uppercase">
                                                <strong>Flutter</strong>
                                            </p>
                                            <button type="button" className="inline-block w-full rounded bg-[#065471] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-[#ffc045] focus:bg-[#065471] focus:outline-none focus:ring-0 active:bg-[hsl(0,0%,90%)]">Buy</button>
                                        </div>
                                        <div className="p-6">
                                            <ol className="list-inside">
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Konsultasi Project
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Wareframe
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Desain UI/UX
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Free Revisi 3X
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Free Maintenance selama 1.5 tahun
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Free unggah ke play store dan app store
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block" id="choices-2" role="tabpanel" aria-labelledby="choices-tab-2">
                            <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
                                <div className="mb-6 lg:mb-0">
                                    <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                        <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center">
                                            <p className="mb-4 text-sm uppercase">
                                                <strong>Laravel + React Js</strong>
                                            </p>
                                            <button type="button" className="inline-block w-full rounded bg-[#065471] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-[#ffc045] focus:bg-[#065471] focus:outline-none focus:ring-0 active:bg-[hsl(0,0%,90%)]">Buy</button>
                                        </div>
                                        <div className="p-6">
                                            <ol className="list-inside">
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Konsultasi Project
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Wareframe
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Desain UI/UX
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Free Revisi 3X
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Free Development ke server
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Free Maintenance selama 1.5 tahun
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6 lg:mb-0">
                                    <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                        <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center">
                                            <p className="mb-4 text-sm uppercase">
                                                <strong>Laravel + Flutter</strong>
                                            </p>
                                            <button type="button" className="inline-block w-full rounded bg-[#065471] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-[#ffc045] focus:bg-[#065471] focus:outline-none focus:ring-0 active:bg-[hsl(0,0%,90%)]">Buy</button>
                                        </div>
                                        <div className="p-6">
                                            <ol className="list-inside">
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Konsultasi Project
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Wareframe
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Desain UI/UX
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Free Revisi 3X
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Free Development ke server
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Free Maintenance selama 1.5 tahun
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6 lg:mb-0">
                                    <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                        <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center">
                                            <p className="mb-4 text-sm uppercase">
                                                <strong>Laravel + React Js + Flutter</strong>
                                            </p>
                                            <button type="button" className="inline-block w-full rounded bg-[#065471] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-[#ffc045] focus:bg-[#065471] focus:outline-none focus:ring-0 active:bg-[hsl(0,0%,90%)]">Buy</button>
                                        </div>
                                        <div className="p-6">
                                            <ol className="list-inside">
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Konsultasi Project
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Wareframe
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Desain UI/UX
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Free Revisi 3X
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Free Development ke server
                                                </li>
                                                <li className="mb-4 flex">
                                                    <AiOutlineCheck className="mr-3 h-5 w-5 text-primary"/>Free Maintenance selama 1.5 tahun
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
