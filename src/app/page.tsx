import Logo from "@/assets/logo/logo.png"
import Profile from "@/assets/profile/profile.jpg"
import { FaLaravel, FaReact } from "react-icons/fa" 
import { BiLogoFlutter, BiMoney } from "react-icons/bi"
import { AiOutlineTool } from "react-icons/ai"
import { BsDiagram3, BsPencil, BsPcDisplayHorizontal, BsTelephoneInbound, BsNewspaper, BsBug } from "react-icons/bs"

export default function Home() {
    return (
        <div>
            <div className="py-12 mx-auto md:px-6">
                <section className="py-24">
                    <div className="px-6 py-12 text-center md:px-12 lg:text-left">
                        <div className="container mx-auto xl:px-32">
                            <div className="grid items-center gap-12 lg:grid-cols-2">
                                <div className="mt-12 lg:mt-0">
                                    <h1 className="mb-16 text-5xl font-bold tracking-tight text-[hsl(218,81%,95%)] md:text-6xl xl:text-7xl">Penawaran terbaik <br /><span className="text-[hsl(218,81%,75%)]">untuk situs web bisnis Anda</span></h1>
                                    <a className="mb-2 inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white bg-[#ffc045] transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] md:mr-2 md:mb-0" data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
                                </div>
                                <div className="mb-12 lg:mb-0">
                                    <img src={Logo.src} className="w-full rounded-lg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="my-12 mx-auto md:px-6 bg-[#05445b] text-white">
                <section className="py-24 text-center">
                    <h2 className="mb-16 text-3xl font-bold">Teknologi yang <span className="text-[#ffc045]">Kami gunakan</span></h2>
                    <div className="px-6 py-12 text-center md:px-12 lg:text-left">
                        <div className="container mx-auto xl:px-32">
                            <div className="grid grid-cols-3 gap-5 text-black">
                                <div className="block w-full rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                    <div className="p-6">
                                        <div className="flex justify-between items-center">
                                            <div className="pe-10">
                                                <h1 className="text-xl font-bold mb-1 text-orange-700">Laravel</h1>
                                                <p className="text-sm mb-12 text-justify">
                                                    Kami menyediakan layana pembuatan website portfolio, ecommerce, perusahaan dan laiin-lainnya serta bisa di sesuaikan dengan kebutuhan
                                                    dari anda dan harga akan di tentukan dari tingkat kebutuhan yang anda minta.
                                                </p>
                                                <p className="underline">20 Project</p>
                                            </div>
                                            <div className="text-7xl text-orange-700">
                                                <FaLaravel/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block w-full rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                    <div className="p-6">
                                        <div className="flex justify-between items-center">
                                            <div className="pe-10">
                                                <h1 className="text-xl font-bold mb-1 text-cyan-500">React</h1>
                                                <p className="text-sm mb-12 text-justify">
                                                    Kami menyediakan layana pembuatan website portfolio, ecommerce, perusahaan dan laiin-lainnya serta bisa di sesuaikan dengan kebutuhan
                                                    dari anda dan harga akan di tentukan dari tingkat kebutuhan yang anda minta.
                                                </p>
                                                <p className="underline">20 Project</p>
                                            </div>
                                            <div className="text-7xl text-cyan-500">
                                                <FaReact/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block w-full rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                    <div className="p-6">
                                        <div className="flex justify-between items-center">
                                            <div className="pe-10">
                                                <h1 className="text-xl font-bold mb-1 text-cyan-600">Flutter</h1>
                                                <p className="text-sm mb-12 text-justify">
                                                    Kami menyediakan layana pembuatan website portfolio, ecommerce, perusahaan dan laiin-lainnya serta bisa di sesuaikan dengan kebutuhan
                                                    dari anda dan harga akan di tentukan dari tingkat kebutuhan yang anda minta.
                                                </p>
                                                <p className="underline">20 Project</p>
                                            </div>
                                            <div className="text-7xl text-cyan-600">
                                                <BiLogoFlutter/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="my-12 md:px-6 text-white">
                <section className="py-24 text-center container m-auto">
                    <h2 className="mb-16 text-3xl font-bold">Service yang kami <span className="text-[#ffc045]">Berikan untuk anda</span></h2>
                    <div className="grid gap-x-6 md:grid-cols-4 lg:gap-x-12">
                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 inline-block rounded-md bg-[#ffc045] p-4 text-white">
                                <AiOutlineTool className="h-7 w-7"/>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Support</h5>
                            <p className="text-neutral-300">
                                Kami akan memberikan support sampai website berjalan dengan normal selama 1 tahun sampai dengan 1.5 tahun.
                            </p>
                        </div>
                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 inline-block rounded-md bg-[#ffc045] p-4 text-white">
                                <BsPencil className="w-6 h-6"/>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Kolsutasi</h5>
                            <p className="text-neutral-300">
                                Kami akan mendengarkan kebutuhan anda dan memberikan fitur 
                                yang sesuai dengan kebutuhan program  anda serta estimasi 
                                pengerjaan dan biaya yang di perlukan dalam pembuatan program.
                            </p>
                        </div>
                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 inline-block rounded-md bg-[#ffc045] p-4 text-white">
                                <BsDiagram3 className="w-6 h-6"/>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">UI/UX</h5>
                            <p className="text-neutral-300">
                                Kami akan memberikan rancangan berupa mockup / wireframe sebelum tahap desain keseluruhan
                                dan kami akan memastikan semua device teroptimasi dengan baik.
                            </p>
                        </div>
                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 inline-block rounded-md bg-[#ffc045] p-4 text-white">
                                <BsPcDisplayHorizontal className="w-6 h-6"/>
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Modernisasi Website</h5>
                            <p className="text-neutral-300">
                                Kami akan mengupgrade program lama anda, menambahkan fitur dan mengubah UI agar menjadi user-friendly serta responsif.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="my-12 md:px-6 bg-[#05445b] text-white">
                <section className="py-24 text-center container m-auto">
                    <h2 className="mb-12 text-3xl font-bold">My <span className="text-[#ffc045]">team</span></h2>
                    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                        <div className="mb-6 lg:mb-0">
                            <div className="block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[#ffc045]">
                                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                                    <img src={Profile.src} className="w-[80%] rounded-t-lg scale-150" />
                                    <a href="#!">
                                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                                    </a>
                                </div>
                                <div className="p-6">
                                    <h5 className="mb-4 text-lg font-bold">Filla Setyana Junior</h5>
                                    <p className="mb-4 text-white">CEO dan Developer</p>
                                    <ul className="mx-auto flex list-inside justify-center">
                                        <a href="https://www.facebook.com/profile.php?id=100007406716564" className="px-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                            </svg>
                                        </a>
                                        <a href="https://www.linkedin.com/in/filla-jr-aab684193" className="px-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-3.5 w-3.5 text-white">
                                                <path fill="currentColor" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                            </svg>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="my-12 mx-auto md:px-6 text-white">
                <section className="py-24 text-center lg:text-left container m-auto">
                    <h2 className="mb-12 text-center text-3xl font-bold">Project yang kami kerjakan</h2>
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
                            <div className="mb-4 flex items-center justify-center text-sm font-medium text-cyan-500 lg:justify-start">
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
            <div className="my-12 mx-auto md:px-6 bg-[#05445b] text-white">
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
                                    <input type="text" className="peer block min-h-[auto] w-full rounded border-2 border-white bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:text-transparent focus:placeholder:opacity-100 peer-focus:text-white data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none" id="exampleInput90" placeholder="Name" />
                                    <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#ffc045] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none" htmlFor="exampleInput90">Name</label>
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input type="email" className="peer block min-h-[auto] w-full rounded border-2 border-white bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:text-transparent focus:placeholder:opacity-100 peer-focus:text-white data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none" id="exampleInput91" placeholder="Email address" />
                                    <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#ffc045] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none" htmlFor="exampleInput91">Email address</label>
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <textarea className="peer block min-h-[auto] w-full rounded border-2 border-white bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:text-transparent focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none" id="exampleFormControlTextarea1" rows={3} placeholder="Your message" ></textarea>
                                    <label htmlFor="exampleFormControlTextarea1" className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#ffc045] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">Message</label>
                                </div>
                                <button type="button" data-te-ripple-init data-te-ripple-color="light" className="mb-6 inline-block w-full rounded bg-[#ffc045] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#ffc045] transition duration-150 ease-in-out hover:bg-[#aa812d] hover:shadow-[0_8px_9px_-4px_rgba(255,192,69,0.3),0_4px_18px_0_rgba(255,192,69,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(255,192,69,0.3),0_4px_18px_0_rgba(255,192,69,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">Send</button>
                            </form>
                        </div>
                        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                            <div className="flex flex-wrap">
                                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-[#ffc045] p-4 text-white">
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
                                            <div className="inline-block rounded-md bg-[#ffc045] p-4 text-white">
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
                                            <div className="inline-block rounded-md bg-[#ffc045] p-4 text-white">
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
                                            <div className="inline-block rounded-md bg-[#ffc045] p-4 text-white">
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