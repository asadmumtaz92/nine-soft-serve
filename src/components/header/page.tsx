"use client"
import { useState, useEffect, } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"


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
                        <Image src={'/logo.png'} priority className="w-[100px] md:w-[140px]" alt="cake shop logo" width={100} height={20} />
                    </Link>
                </div>

                {isMobile ? (
                    <>
                        <Image
                            src="/images/menu.svg"
                            alt="Menu Logo"
                            width={42}
                            height={42}
                            className="mr-[25px]"
                            onClick={toggleMenu}
                            priority
                        />
                        <div
                            className={`fixed top-0 left-0 w-full h-full z-[999] flex flex-col justify-center items-center transform transition-transform duration-500 bg-black ease-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                                }`}
                        >
                            <Image
                                src="/images/cross-icon.svg"
                                alt="Cross Icon"
                                width={34}
                                height={34}
                                className="absolute top-6 right-6"
                                onClick={toggleMenu}
                            />
                            <Link
                                onClick={handleLinkClick}
                                href="/cases"
                                className="text-white no-underline font-bold text-[2.25rem] mt-24 uppercase "
                            >
                                {localeHeader?.cases}
                            </Link>
                            <Link
                                onClick={handleLinkClick}
                                href="/about"
                                className="text-white no-underline font-bold text-[2.25rem] mt-24 uppercase "
                            >
                                {localeHeader?.about}
                            </Link>
                            <Link
                                onClick={handleLinkClick}
                                href="/contact"
                                className="text-white no-underline font-bold text-[2.25rem] mt-24 uppercase "
                            >
                                {localeHeader?.contact}
                            </Link>
                            <div>
                                <Image
                                    src="/images/mid-logo.svg"
                                    alt="Nexttier logo"
                                    width={21.19}
                                    height={12.61}
                                    className="pt-6"
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="hidden lg:block mx-[30px]">
                        <nav className="flex items-center  gap-x-[25px] font-outfit !font-[600] text-[1rem] bg-white rounded-[20px] px-[30px] h-[50px]">
                            <Link href="/" className={`no-underline text-pink-400 uppercase  ${pathname.endsWith("/") ? "!text-black" : ""}`}>
                                {`Home`}
                            </Link>
                            <Link href="/shop" className={`no-underline text-pink-400 uppercase  ${pathname.endsWith("/shop") ? "!text-black" : ""}`}>
                                {`Shop`}
                            </Link>
                            <Link href="/icecreams" className={`no-underline text-pink-400 uppercase ${pathname.endsWith("/icecreams") ? "!text-black" : ""}`}>
                                {`Icecreams`}
                            </Link>
                            <Link href="/cakes" className={`no-underline text-pink-400 uppercase  ${pathname.endsWith("/cakes") ? "!text-black" : ""}`}>
                                {`Cakes`}
                            </Link>
                            <Link href="/catering" className={`no-underline text-pink-400 uppercase  ${pathname.endsWith("/catering") ? "!text-black" : ""}`}>
                                {`Catering`}
                            </Link>
                        </nav>
                    </div>
                )}

                <div className="flex items-center gap-x-[20px]">
                    <Image src={'/icons/delivery.svg'} priority className="cursor-pointer delivery" alt="icon" height={30} width={30} />
                    <div className="flex relative cursor-pointer">
                        <span className="flex items-center justify-center absolute right-[-11px] top-[-8px] w-[20px] h-[20px] rounded-[10px] bg-black text-white text-[0.7rem] leading-[0.7rem]">2</span>
                        <Image src={'/icons/cart-icon.svg'} priority className="" alt="icon" height={20} width={18} />
                    </div>
                </div>
            </div>
        </header>
    )
}





