import type { Metadata } from "next"
import Logo from "@/assets/logo/about.png"

export const metadata: Metadata = {
  title: "Tentang Saya - Just Code In Web",
}

export default function About() {
    return (
        <div>
            <div className="x-auto md:px-6 bg-[url('../assets/banner/banner-3.jpg')] relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[500px]">
                <section className="py-24">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
                        <div className="flex h-full items-center justify-center">
                            <div className="px-6 text-center text-white md:px-12">
                                <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight">About</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="mb-12 mx-auto md:px-6 text-white bg-[#05445b]">
                <section className="py-24 container m-auto" >
                    <img src={Logo.src} className="mb-6 w-1/2 rounded-lg shadow-lg m-auto" alt = "image" />
                    <h1 className="mb-6 text-3xl font-bold" >Tentang saya</h1>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <p className="text-justify">
                                Kami adalah perusahaan yang menyediakan jasa pembuatan website dan migrasi website lama.Kami memiliki tim yang berpengalaman dan profesional dalam membuat dan memigrasikan website.Kami menggunakan teknologi yang up - to - date untuk membuat website yang modern dan responsif.
                                <br/>
                                <br/>
                                Kami menawarkan berbagai jenis website, mulai dari website statis hingga website dinamis.Kami juga dapat membuat website khusus untuk bisnis Anda, seperti website toko online atau website corporate.
                                <br/>
                                <br/>
                                Selain membuat website, kami juga menyediakan jasa migrasi website lama ke platform yang baru.Kami akan memindahkan semua data dan file website Anda ke platform baru dengan aman dan tanpa data yang hilang.
                                <br/>
                                <br/>
                                Kami berkomitmen untuk memberikan layanan yang terbaik kepada pelanggan kami.Kami selalu mengutamakan kepuasan pelanggan dan memberikan garansi untuk semua layanan kami.
                            </p>
                        </div>
                        <div>
                            <h5 className="mb-6 text-xl font-bold">Apa yang kami tawarkan ?</h5>
                            <ol>
                                <li>1. Jasa pembuatan website dengan berbagai jenis dan fitur yang anda inginkan</li>
                                <li>2. Jasa migrasi website lama ke platform baru</li>
                                <li>3. Layanan support dan maintenance website</li>
                                <li>4. Garansi untuk semua layanan kami</li>
                            </ol>
                            <br/>
                            <h5 className="mb-6 text-xl font-bold">Mengapa memilih kami?</h5>
                            <ol>
                                <li>1. Kami memiliki tim yang berpengalaman dan profesional</li>
                                <li>2. Kami menggunakan teknologi yang up-to-date</li>
                                <li>3. Kami menawarkan harga yang kompetitif</li>
                                <li>4. Kami memberikan garansi untuk semua layanan kami</li>
                            </ol>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
