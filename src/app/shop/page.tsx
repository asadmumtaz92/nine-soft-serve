'use client'
import Image from 'next/image'
import React, { useState } from 'react'


const Shop = () => {


    const [val, setVal] = useState('')
    const products = [
        { id: 1, image: '/images/vanilla.svg', type: 1 },
        { id: 2, image: '/images/vanilla.svg', type: 1 },
        { id: 3, image: '/images/vanilla.svg', type: 1 },
        { id: 4, image: '/images/vanilla.svg', type: 1 },
        { id: 5, image: '/images/vanilla.svg', type: 1 },
        { id: 6, image: '/images/vanilla.svg', type: 1 },
        { id: 7, image: '/images/vanilla.svg', type: 1 },
        { id: 8, image: '/images/vanilla.svg', type: 1 },
        { id: 9, image: '/images/vanilla.svg', type: 1 },
        { id: 10, image: '/images/choclate.svg', type: 2 },
        { id: 11, image: '/images/choclate.svg', type: 2 },
        { id: 12, image: '/images/choclate.svg', type: 2 },
        { id: 13, image: '/images/choclate.svg', type: 2 },
        { id: 14, image: '/images/choclate.svg', type: 2 },
        { id: 15, image: '/images/choclate.svg', type: 2 },
        { id: 16, image: '/images/choclate.svg', type: 2 },
        { id: 17, image: '/images/choclate.svg', type: 2 },
        { id: 18, image: '/images/choclate.svg', type: 2 },

        { id: 19, image: '/images/vanilla.svg', type: 3 },
        { id: 20, image: '/images/choclate.svg', type: 3 },
        { id: 21, image: '/images/vanilla.svg', type: 3 },
        { id: 22, image: '/images/choclate.svg', type: 3 },
        { id: 23, image: '/images/vanilla.svg', type: 3 },
        { id: 24, image: '/images/choclate.svg', type: 3 },

        { id: 25, image: '/images/vanilla.svg', type: 4 },
        { id: 26, image: '/images/vanilla.svg', type: 4 },
        { id: 27, image: '/images/choclate.svg', type: 4 },
        { id: 28, image: '/images/choclate.svg', type: 4 },
        { id: 29, image: '/images/vanilla.svg', type: 4 },
        { id: 30, image: '/images/choclate.svg', type: 4 },
    ]

    const ProductItem = (data: any) => {
        const { id, image, type } = data?.data
        return (
            <div className="flex flex-col items-center relative w-[280px] h-[420px] cursor-pointer mb-[50px] mx-auto">
                <Image
                    src={image}
                    alt="Image2Work logo"
                    className="w-[220px] h-[200px]"
                    width={220}
                    height={200}
                />
                <div className="text-center px-[15px] mt-2">
                    <h1 className="!font-rowdies !font-[300] text-[1.5rem] leading-[2rem] text-brown-base">Unicorn in cloud nine</h1>
                    <p className="!font-rowdies !font-[300] text-[1.5rem] leading-[1.5rem] text-brown-base my-[10px]">SAR 230.00</p>
                    <p className="!font-outfit !font-[300] text-[1rem] leading-[1.5rem] text-black">Magical Vanilla softie in a shape of unicorn in our pinky cotton candy cloud</p>
                    <p className="!font-outfit !font-[300] text-[1rem] leading-[1.5rem] text-black">498 CAL</p>
                </div>

            </div>
        )
    }


    return (
        <div className={`flex flex-col  w-[100vw]`}>
            <div className={`flex w-[100vw] bg-[url('/bg/shop.svg')] bg-cover bg-bottom bg-no-repeat h-full min-h-[460px] pb-6`}></div>

            <div className="flex justify-center !font-outfit bg-white !font-[400] text-[1rem] leading-[15px] my-[80px] px-[40px] md:px-[80px] xl:px-[120px]">
                <div className='relative border-[#C0C0C0] border-[1px] h-[56px] bg-white drop-shadow-xl rounded-[20px] overflow-hodden w-full max-w-[550px]'>
                    <input
                        placeholder='Search Products here'
                        value={val}
                        onChange={(e: any) => setVal(e?.event?.target)}
                        className='flex rounded-[20px] w-full h-[54px] pl-[30px]'
                    />
                    <Image src={'/icons/search-icon.svg'} priority className='cursor-pointer absolute right-[20px] top-[13px]' width={30} height={30} alt='search icon' />
                </div>
            </div>

            <div className={`grid grid-cols-12 mt-[60px] px-[40px] md:px-[80px] xl:px-[120px]`}>
                <div className="col-start-1 col-end-13">
                    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[20px]`}>
                        {products?.map((item: any) => {
                            if (item?.type) {
                                return <ProductItem key={item?.id} data={item} />
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop