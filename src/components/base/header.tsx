"use client"
import { useEffect, useState } from 'react'
import { FaAlignJustify } from "react-icons/fa"
import { BsXLg } from 'react-icons/bs'
import Link from 'next/link'

export default function Header() {
    const [header, setHeader] = useState("bg-transparent")

    const listenScrollEvent = () => {
        if (window.scrollY < 297) {
            return setHeader("bg-transparent transition duration-700 ease-in-out")
        } else if (window.scrollY > 300) {
            return setHeader("bg-[#065471cc] transition duration-700 ease-in-out")
        } 
    }

    useEffect(() => {
        const init = async () => {
            const { Offcanvas, initTE } = await import("tw-elements");
            initTE({ Offcanvas });
        };
        init();
        window.addEventListener('scroll', listenScrollEvent);
        return () => window.removeEventListener('scroll', listenScrollEvent);
    }, []);
    return (
        <>
            <header className={`fixed top-0 z-10 w-full py-2 text-[#ffc045] md:flex-wrap md:justify-start ${header}`}>
                <nav className="container m-auto" data-te-navbar-ref>
                    <div className="flex w-full px-3">
                        <div className="text-xl py-2 title">
                            <h5 className="mb-0 font-semibold leading-normal">Just Code In Web</h5>
                        </div>
                        <div className="flex items-center ms-auto">
                            <a className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-white focus:text-white lg:hidden" type="button" data-te-offcanvas-toggle href="#offcanvasExample" aria-controls="offcanvasExample" data-te-ripple-init data-te-ripple-color="light">
                                <FaAlignJustify/>
                            </a>
                        </div>
                        <div className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContentY" data-te-collapse-item>
                            <ul className="ms-auto flex flex-col lg:flex-row" data-te-navbar-nav-ref>
                                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                    <Link className="hover:text-white focus:text-white disabled:text-gray lg:p-2 [&.active]:text-black/90" href="/" data-te-nav-link-ref>Beranda</Link>
                                </li>
                                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                    <Link className="hover:text-white focus:text-white disabled:text-gray lg:p-2 [&.active]:text-black/90" href="/about" data-te-nav-link-ref>Tentang Saya</Link>
                                </li>
                                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                    <Link className="hover:text-white focus:text-white disabled:text-gray lg:p-2 [&.active]:text-black/90" href="/services" data-te-nav-link-ref>Layanan</Link>
                                </li>
                                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                    <Link className="hover:text-white focus:text-white disabled:text-gray lg:p-2 [&.active]:text-black/90" href="/products" data-te-nav-link-ref>Produk</Link>
                                </li>
                                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                    <Link className="hover:text-white focus:text-white disabled:text-gray lg:p-2 [&.active]:text-black/90" href="/contact" data-te-nav-link-ref>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <div className="invisible fixed bottom-0 left-0 top-0 z-[1045] flex w-96 max-w-full -translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out [&[data-te-offcanvas-show]]:transform-none" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" data-te-offcanvas-init>
                            <div className="flex items-center justify-between p-4">
                                <h5 className="mb-0 font-semibold leading-normal" id="offcanvasExampleLabel">
                                    Just Code In Web
                                </h5>
                                <button type="button" className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-offcanvas-dismiss>
                                    <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                                        <BsXLg className="h-6 w-6"/>
                                    </span>
                                </button>
                            </div>
                            <div className="flex-grow overflow-y-auto p-4">
                                <ul className="mx-auto flex flex-col lg:flex-row" data-te-navbar-nav-ref>
                                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                        <Link className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:p-2 [&.active]:text-black/90" href="/" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Beranda</Link>
                                    </li>
                                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                        <Link className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:p-2 [&.active]:text-black/90" href="#about" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Tentang Saya</Link>
                                    </li>
                                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                        <Link className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:p-2 [&.active]:text-black/90" href="#portfolio" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Portfolio</Link>
                                    </li>
                                    <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                        <Link className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:p-2 [&.active]:text-black/90" href="#contact" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
