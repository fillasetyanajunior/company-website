import { FaReact } from "react-icons/fa"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Produk - Just Code In Web",
}

export default function Product() {
    return (
        <div>
            <div className="x-auto md:px-6 bg-[url('../assets/banner/banner-1.jpg')] relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[500px]">
                <section className="py-24">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
                        <div className="flex h-full items-center justify-center">
                            <div className="px-6 text-center text-white md:px-12">
                                <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight">Produk</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="mb-12 mx-auto md:px-6 text-white bg-[#05445b]">
                <section className="py-24 text-center lg:text-left container m-auto">
                    <div className="grid gap-x-6 lg:grid-cols-3">
                        <div className="mb-12 lg:mb-0">
                            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg" data-te-ripple-init data-te-ripple-color="light">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg" className="w-full" />
                                <a href="#!">
                                    <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                                </a>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Hollywood Exhibition</h5>
                            <div className="mb-4 flex items-center justify-center text-sm font-medium text-danger lg:justify-start">
                                <FaReact className="w-5 h-5 mr-2"/>
                                React Js
                            </div>
                            <p className="text-neutral-300">
                                Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
                                vulputate. Ut vulputate est non quam dignissim elementum. Donec a
                                ullamcorper diam.
                            </p>
                        </div>
                        <div className="mb-12 lg:mb-0">
                            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg" data-te-ripple-init data-te-ripple-color="light">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/045.jpg" className="w-full" />
                                <a href="#!">
                                    <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                                </a>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Big Apple</h5>
                            <div className="mb-4 flex items-center justify-center text-sm font-medium text-primary lg:justify-start">
                                <FaReact className="w-5 h-5 mr-2"/>
                                React Js
                            </div>
                            <p className="text-neutral-300">
                                Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
                                orci, nec ornare metus semper sed. Integer volutpat ornare erat
                                sit amet rutrum.
                            </p>
                        </div>
                        <div className="mb-0">
                            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg" data-te-ripple-init data-te-ripple-color="light">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/047.jpg" className="w-full" />
                                <a href="#!">
                                    <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                                </a>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Sun City</h5>
                            <div className="mb-4 flex items-center justify-center text-sm font-medium text-warning lg:justify-start">
                                <FaReact className="w-5 h-5 mr-2"/>
                                React Js
                            </div>
                            <p className="text-neutral-300">
                                Curabitur tristique, mi a mollis sagittis, metus felis mattis
                                arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa
                                volutpat feugiat. Donec.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
