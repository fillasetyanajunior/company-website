import type { Metadata } from "next"
import Tables from "./tables"

export const metadata: Metadata = {
  title: "Dashboard - Just Code In Web",
}

export default function Dashboard() {
    const url: string = String(process.env.APP_URL_API)
    
    return (
        <Tables params={{url: url}}/>
    )     
}