import Image from "next/image"
import Logo from '@/assets/logo/logo.png'
import { BsTelegram } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi'

export default function Footer() {
    return (
        <footer className="text-center text-white lg:text-left object-bottom">
            <div className="container m-auto">
                <div className="flex items-center justify-center border-b-2 border-[#1b6d8b] p-6 lg:justify-between">
                    <div className="mr-12 hidden lg:block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div className="flex justify-center">
                        <a href="#" className="mr-6 text-white">
                            <BiLogoFacebook className="h-6 w-6"/>
                        </a>
                        <a href ="https://www.instagram.com/justcodeinweb" className="mr-6 text-white">
                            <BiLogoInstagram className="h-6 w-6"/>
                        </a>
                    </div>
                </div>
                <div className="mx-6 py-10 text-center md:text-left">
                    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="">
                            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                                <Image src={Logo} className="mr-3 h-10 w-10" alt=""/>
                                Just Code In Web
                            </h6>
                            <p>
                                Kami akan membuatkan website anda dengan harga yang flexibel sesuai dengan kebutuhan anda.
                            </p>
                        </div>
                        <div className="">
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Products</h6>
                            <p className="mb-4">
                                <a href="#" className="text-white">Flutter</a>
                            </p>
                            <p className="mb-4">
                                <a href="#" className="text-white">React</a>
                            </p>
                            <p>
                                <a href="#" className="text-white">Laravel</a>
                            </p>
                        </div>
                        <div className="">
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Useful links</h6>
                            <p className="mb-4">
                                <a href="#" className="text-white">Pricing</a>
                            </p>
                            <p className="mb-4">
                                <a href="#" className="text-white">Settings</a>
                            </p>
                            <p className="mb-4">
                                <a href="#" className="text-white">Orders</a>
                            </p>
                            <p>
                                <a href="#" className="text-white">Help</a>
                            </p>
                        </div>
                        <div>
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Contact</h6>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <AiOutlineHome className="mr-3 h-5 w-5"/>
                                New York, NY 10012, US
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <AiOutlineMail className="mr-3 h-5 w-5"/>
                                justcodeinweb@gmail.com
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <BsTelegram className="mr-3 w-5 h-5"/>
                                <a href="https://t.me/justcodeinweb" className="text-neutral-300">t.me/justcodeinweb</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-6 text-center">
                    <span>©{(new Date()).getFullYear()} Copyright :</span>
                    <a className="font-semibold text-white" href="https://tailwind-elements.com/"> Just Code In Web</a>
                </div>
            </div>
        </footer>
    )
}
