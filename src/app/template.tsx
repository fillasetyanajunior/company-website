"use client"
import Header from "@/components/base/header"
import Footer from "@/components/base/footer"
import { usePathname } from "next/navigation"

export default function layout({ children }:{ children: React.ReactNode}) {
    const pathnames = usePathname()
    const pathname = pathnames.split("/")
    if (pathname[1] == "dashboard" || pathname[1] == "login" || pathname[1] == "register") {
        return (
            <>
                {children}
            </>
        )
    }else{
        return (
            <>
                <div className="bg-[#065471]">
                    <Header/>
                    {children}
                    <Footer/>
                </div>
            </>
        )
    }
}
