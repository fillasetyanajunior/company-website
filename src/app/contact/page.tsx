import type { Metadata } from "next"
import { BiMoney } from "react-icons/bi"
import { BsTelephoneInbound, BsNewspaper, BsBug } from "react-icons/bs"

export const metadata: Metadata = {
  title: "Tentang Saya - Just Code In Web",
}

export default function Contact() {
    return (
        <div>
            <div className="mx-auto md:px-6 bg-[url('../assets/banner/banner-4.jpg')] relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[500px]">
                <section className="py-24">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
                        <div className="flex h-full items-center justify-center">
                            <div className="px-6 text-center text-white md:px-12">
                                <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight">Contact</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="mb-12 mx-auto md:px-6 bg-[#05445b] text-white">
                <section className="py-24 container m-auto">
                    <div className="flex justify-center">
                        <div className="text-center md:max-w-xl lg:max-w-3xl">
                            <h2 className="mb-12 px-6 text-3xl font-bold">Contact us</h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                            <form>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input type="text" className="peer block min-h-[auto] w-full rounded border-2 border-white bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:text-transparent focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none" id="exampleInput90" placeholder="Name" />
                                    <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#ffc045] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none" htmlFor="exampleInput90">Name</label>
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input type="email" className="peer block min-h-[auto] w-full rounded border-2 border-white bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:text-transparent focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none" id="exampleInput91" placeholder="Email address" />
                                    <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#ffc045] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none" htmlFor="exampleInput91">Email address</label>
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <textarea className="peer block min-h-[auto] w-full rounded border-2 border-white bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:text-transparent focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none" id="exampleFormControlTextarea1" rows={3} placeholder="Your message" ></textarea>
                                    <label htmlFor="exampleFormControlTextarea1" className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#ffc045] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">Message</label>
                                </div>
                                <button type="button" data-te-ripple-init data-te-ripple-color="light" className="mb-6 inline-block w-full rounded bg-[#ffc045] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#ffc045] transition duration-150 ease-in-out hover:bg-[#aa812d] hover:shadow-[0_8px_9px_-4px_rgba(255,192,69,0.3),0_4px_18px_0_rgba(255,192,69,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(255,192,69,0.3),0_4px_18px_0_rgba(255,192,69,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">Send</button>
                            </form>
                        </div>
                        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                            <div className="flex flex-wrap">
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-[#ffc045] p-4 text-primary">
                                                <BsTelephoneInbound className="h-6 w-6"/>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-bold">Technical support</p>
                                            <p className="text-neutral-300">justcodeinweb@gmail.com</p>
                                            <a href="https://t.me/justcodeinweb" className="text-neutral-300">t.me/justcodeinweb</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-[#ffc045] p-4 text-primary">
                                                <BiMoney className="h-6 w-6"/>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-bold">Sales questions</p>
                                            <p className="text-neutral-300">justcodeinweb@gmail.com</p>
                                            <a href="https://t.me/justcodeinweb" className="text-neutral-300">t.me/justcodeinweb</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <div className="align-start flex">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-[#ffc045] p-4 text-primary">
                                                <BsNewspaper className="h-6 w-6"/>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-bold">Press</p>
                                            <p className="text-neutral-300">justcodeinweb@gmail.com</p>
                                            <a href="https://t.me/justcodeinweb" className="text-neutral-300">t.me/justcodeinweb</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <div className="align-start flex">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-[#ffc045] p-4 text-primary">
                                                <BsBug className="h-6 w-6"/>
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-bold">Bug report</p>
                                            <p className="text-neutral-300">justcodeinweb@gmail.com</p>
                                            <a href="https://t.me/justcodeinweb" className="text-neutral-300">t.me/justcodeinweb</a>
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
