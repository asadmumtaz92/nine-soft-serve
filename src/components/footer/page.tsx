import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {


    return (
        <div className={`flex flex-col w-full min-h-[400px] bg-[url('/bg/footer.svg')] bg-top bg-cover bg-center self-stretch bg-no-repeat`}>
            <div className="flex flex-col md:flex-row pt-[150px] pb-[60px] md:pt-[200px] md:pb-[100px] px-[40px] md:px-[80px] xl:px-[120px]">
                {/* LINKS */}
                <div className='order-2 md:order-1 mt-[30px] md:mt-0 flex flex-1 justify-center'>
                    <div className="flex flex-col text-white">
                        <h1 className='font-rowdies font-[400] text-[1.25rem] leading-[1.25rem] mb-[20px]'>{`LINKS`}</h1>
                        <Link href="/" className={`text-[1rem] !font-[500] leading-[1rem] no-underline mb-[30px]`}>
                            {'Home'}
                        </Link>
                        <Link href="/shop" className={`text-[1rem] !font-[500] leading-[1rem] no-underline mb-[30px]`}>
                            {'Shop'}
                        </Link>
                        <Link href="/icecreams" className={`text-[1rem] !font-[500] leading-[1rem] no-underline mb-[30px]`}>
                            {'Icecreams'}
                        </Link>
                        <Link href="/cakes" className={`text-[1rem] !font-[500] leading-[1rem] no-underline mb-[30px]`}>
                            {'Cakes'}
                        </Link>
                        <Link href="/catering" className={`text-[1rem] !font-[500] leading-[1rem] no-underline mb-[30px]`}>
                            {'Catering'}
                        </Link>
                    </div>
                </div>
                {/* LOGO & SLUG */}
                <div className="order-1 md:order-2 flex flex-col flex-1">
                    <div className="flex">
                        <Image src='/logo.png' priority className='w-[190px] h-[90px]' width={190} height={90} alt='' />
                    </div>
                    <div className="flex flex-col">
                        <p className='!font-outfit !font-[400] text-white text-[1rem] leading-[1.75rem] max-w-[100%] sm:max-w-[50%] mt-[10px]'>{`Visit us for a sweet treat or contact us for catering! Follow us on social media for updates and special offers.`}</p>
                        <Image src='/icons/instagram.svg' priority className='cursor-pointer mt-[10px] w-[30px] h-[30px]' width={30} height={30} alt='' />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full h-[50px] bg-pink-base text-white !font-outfit !font-[600] text-[1rem] leading-[15px]">
                © 2024 Nine. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer