"use client"
import { useEffect } from "react";
import Logo from '@/assets/logo/logo.png';
import { FaAlignJustify, FaAngleDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from 'next/image'

export default function Header() {
    const pathname = usePathname()
    useEffect(() => {
        const init = async () => {
            const { Sidenav, initTE } = await import("tw-elements");
            initTE({ Sidenav });
        };
        init();
    }, []);
    return(
        <div>            
            <nav className="fixed top-0 z-50 w-full bg-[#065471] border-b border-[#065471]">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button data-te-sidenav-toggle-ref data-te-target="#sidenav-1" type="button" className="inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
                                    <FaAlignJustify className="h-6 w-6"/>
                            </button>
                            <a href="/" className="flex ml-2 md:mr-24">
                                <img src={Logo.src} className="h-8 mr-3" alt="FlowBite Logo" />
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ml-3">
                                <div>
                                    <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <div className="w-8 h-8 rounded-full">
                                            <Image src={Logo.src} alt="user photo" width={100} height={100}/>
                                        </div>
                                    </button>
                                </div>
                                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow" id="dropdown-user">
                                    <div className="px-4 py-3" role="none">
                                        <p className="text-sm text-gray-900" role="none">Neil Sims</p>
                                        <p className="text-sm font-medium text-gray-900 truncate" role="none">neil.sims@flowbite.com</p>
                                    </div>
                                    <ul className="py-1" role="none">
                                        <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</a></li>
                                        <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a></li>
                                        <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Earnings</a></li>
                                        <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <aside id="sidenav-1" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-[#05435a] border-r border-[#05435a] sm:translate-x-0" aria-label="Sidebar" data-te-sidenav-init data-te-sidenav-hidden="false" data-te-sidenav-mode="side">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-[#05435a]">
                    <ul className="space-y-2 font-medium" data-te-sidenav-menu-ref>
                        <li><Link href="/dashboard" className={`flex items-center h-8 text-white rounded-lg hover:bg-white hover:text-[#065471] text-[0.9rem] group ${pathname == '/dashboard' ? 'active' : ''}`} data-te-sidenav-link-ref><span className="ml-3">Dashboard</span></Link></li>
                        <li>
                            <Link href="#" className="flex items-center h-8 text-white rounded-lg hover:bg-white hover:text-[#065471] text-[0.9rem] group" data-te-sidenav-link-ref>
                                <span className="ml-3">Transaksi</span>
                                <span className="right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none" data-te-sidenav-rotate-icon-ref><FaAngleDown className="h-5 w-5"/></span>
                            </Link>
                            <ul className="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block" data-te-sidenav-collapse-ref>
                                <li><Link href="/dashboard/transaction-products" className={`flex h-6 cursor-pointer items-center truncate rounded-[5px] my-2 py-4 pl-[2rem] pr-6 text-[0.9rem] text-white hover:bg-white hover:text-[#065471] outline-none transition duration-300 ease-linear hover:outline-none] group ${pathname == '/dashboard/transaction-products' ? 'active' : ''}`} data-te-sidenav-link-ref><span className="ml-3">Traksaksi Produk</span></Link></li>
                                <li><Link href="/dashboard/transaction-services" className={`flex h-6 cursor-pointer items-center truncate rounded-[5px] my-2 py-4 pl-[2rem] pr-6 text-[0.9rem] text-white hover:bg-white hover:text-[#065471] outline-none transition duration-300 ease-linear hover:outline-none] group ${pathname == '/dashboard/transaction-services' ? 'active' : ''}`} data-te-sidenav-link-ref><span className="ml-3">Traksaksi Layanan</span></Link></li>
                            </ul>
                        </li>
                        <li><Link href="/dashboard/products" className={`flex items-center h-8 text-white rounded-lg hover:bg-white hover:text-[#065471] text-[0.9rem] group ${pathname == '/dashboard/products' ? 'active' : ''}`} data-te-sidenav-link-ref><span className="ml-3">Produk</span></Link></li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}