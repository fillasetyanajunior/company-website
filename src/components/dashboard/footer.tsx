export default function Footer() {
    return(
        <footer className="bg-transparent text-center lg:text-left">
            <div className="p-4 text-center text-black">
                ©{(new Date()).getFullYear()} Copyright: <a className="text-[#ffc045]" href="https://tailwind-elements.com/">Just Code In Web</a>
            </div>
        </footer>
    )
}