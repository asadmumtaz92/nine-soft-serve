"use client"
import { useState, useEffect, } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { MenuIcon, X } from "lucide-react"


export default function Header({ localeHeader }: any) {


    const pathname = usePathname()
    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [prevScrollpos, setPrevScrollpos] = useState(0)
    const [scrollTimeout, setScrollTimeout] = useState<number | null>(null)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const handleLinkClick = () => setIsMenuOpen(false)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const navbar = document.getElementById("navbar")

        if (navbar) {
            if (currentScrollPos > prevScrollpos && currentScrollPos > 50) {
                navbar.style.top = "-130px";
            } else {
                navbar.style.top = "-130px";
            }
        }

        setPrevScrollpos(currentScrollPos);

        if (scrollTimeout) clearTimeout(scrollTimeout)

        setScrollTimeout(
            setTimeout(() => {
                const navbar = document.getElementById("navbar")
                if (navbar) {
                    navbar.style.transition = "all 0.3s ease-in-out"
                    navbar.style.top = "0"
                }
            }, 100) as unknown as number
        )
    }

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024)

        handleResize()
        window.addEventListener("resize", handleResize)
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("scroll", handleScroll)

            if (scrollTimeout) clearTimeout(scrollTimeout)
        }
    }, [prevScrollpos, scrollTimeout])


    return (
        <header id="navbar" className={`flex justify-between items-center fixed w-full z-[20] h-[120px] px-[40px] md:px-[80px] xl:px-[120px] bg-pink-base`}>
            <div className="flex justify-between items-center w-full border-b-2 border-dashed border-white h-full">
                <div className="flex items-center">
                    <Link href="/">
                        <Image src={'/logo.png'} priority className="w-[140px]" alt="cake shop logo" width={100} height={20} />
                    </Link>
                </div>

                {isMobile ? (
                    <>
                        {/* MENU OPEN ICON */}
                        <div className="flex flex-1 justify-end ">
                            <MenuIcon onClick={toggleMenu} className="cursor-pointer text-white w-[35px] h-[35px] mr-[20px]" />
                        </div>
                        <div className={`text-pink-base text-[2.25rem] uppercase  fixed top-0 left-0 w-full h-full z-[999] flex flex-col justify-center items-center transform transition-transform duration-500 bg-white ease-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                            <X onClick={toggleMenu} className="cursor-pointer absolute top-6 right-6 text-pink-base w-[35px] h-[35px]" />
                            <Link onClick={handleLinkClick} href="/" className={`${pathname.endsWith("/") ? "!text-black" : ""} no-underline`}>
                                {'Home'}
                            </Link>
                            <Link onClick={handleLinkClick} href="/shop" className={`${pathname.endsWith("/shop") ? "!text-black" : ""} no-underline mt-8`}>
                                {'Shop'}
                            </Link>
                            <Link onClick={handleLinkClick} href="/icecreams" className={`${pathname.endsWith("/icecreams") ? "!text-black" : ""} no-underline mt-8`}>
                                {'Icecreams'}
                            </Link>
                            <Link onClick={handleLinkClick} href="/cakes" className={`${pathname.endsWith("/cakes") ? "!text-black" : ""} no-underline mt-8`}>
                                {'Cakes'}
                            </Link>
                            <Link onClick={handleLinkClick} href="/catering" className={`${pathname.endsWith("/catering") ? "!text-black" : ""} no-underline mt-8`}>
                                {'Catering'}
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className="hidden lg:block mx-[30px]">
                        <nav className="flex items-center  gap-x-[25px] font-outfit !font-[600] text-[1rem] bg-white rounded-[20px] px-[30px] h-[50px]">
                            <Link href="/" className={`no-underline text-pink-400 uppercase ${pathname.endsWith("/") ? "!text-black" : ""}`}>
                                {`Home`}
                            </Link>
                            <Link href="/shop" className={`no-underline text-pink-400 uppercase ${pathname.endsWith("/shop") ? "!text-black" : ""}`}>
                                {`Shop`}
                            </Link>
                            <Link href="/icecreams" className={`no-underline text-pink-400 uppercase ${pathname.endsWith("/icecreams") ? "!text-black" : ""}`}>
                                {`Icecreams`}
                            </Link>
                            <Link href="/cakes" className={`no-underline text-pink-400 uppercase ${pathname.endsWith("/cakes") ? "!text-black" : ""}`}>
                                {`Cakes`}
                            </Link>
                            <Link href="/catering" className={`no-underline text-pink-400 uppercase ${pathname.endsWith("/catering") ? "!text-black" : ""}`}>
                                {`Catering`}
                            </Link>
                        </nav>
                    </div>
                )}

                <div className="flex items-center gap-x-[20px]">
                    <Image src={'/icons/delivery.svg'} priority className="cursor-pointer delivery" alt="icon" height={30} width={30} />
                    <div className="flex relative cursor-pointer">
                        <span className="flex items-center justify-center absolute right-[-11px] top-[-8px] w-[20px] h-[20px] rounded-[10px] bg-black text-white text-[0.7rem] leading-[0.7rem]">2</span>
                        <Image src={'/icons/cart-icon.svg'} priority className="min-w-[20px] min-h-[18px]" alt="icon" height={20} width={18} />
                    </div>
                </div>
            </div>
        </header>
    )
}





