'use client'
import React, { useState } from 'react'
import Image from 'next/image'


const IceCreams = () => {


    const [activeTab, setActiveTab] = useState(1)
    const flavours = [
        { id: 1, name: 'Vanilla' },
        { id: 2, name: 'Choclate' },
        { id: 3, name: 'Mango' },
        { id: 4, name: 'Strawberry' },
        { id: 5, name: 'cheese Cake' },
        { id: 6, name: 'Mixes' },
        { id: 7, name: 'Safarat Special Menu' },
        { id: 8, name: 'On the Go!' },
        { id: 9, name: 'Sharing Boxes' },
    ]

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

        { id: 31, image: '/images/vanilla.svg', type: 5 },
        { id: 32, image: '/images/choclate.svg', type: 5 },
        { id: 33, image: '/images/vanilla.svg', type: 5 },
        { id: 34, image: '/images/choclate.svg', type: 5 },
        { id: 35, image: '/images/vanilla.svg', type: 5 },
        { id: 36, image: '/images/choclate.svg', type: 5 },

        { id: 37, image: '/images/vanilla.svg', type: 6 },
        { id: 38, image: '/images/choclate.svg', type: 6 },
        { id: 39, image: '/images/choclate.svg', type: 6 },
        { id: 40, image: '/images/choclate.svg', type: 7 },
        { id: 41, image: '/images/vanilla.svg', type: 7 },
        { id: 42, image: '/images/choclate.svg', type: 7 },

        { id: 43, image: '/images/vanilla.svg', type: 8 },
        { id: 4, image: '/images/choclate.svg', type: 8 },
        { id: 45, image: '/images/choclate.svg', type: 8 },
        { id: 46, image: '/images/choclate.svg', type: 9 },
        { id: 47, image: '/images/vanilla.svg', type: 9 },
        { id: 48, image: '/images/choclate.svg', type: 9 },
    ]

    const ProductItem = (data: any) => {
        const { id, image, type } = data?.data
        return (
            <div className="flex flex-col items-center relative w-[280px] h-[420px] cursor-pointer mb-[50px] mx-auto product">
                <Image
                    src={image}
                    alt="Image2Work logo"
                    className="w-[220px] h-[200px] hover-image transform transition-transform duration-300"
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
        <>
            <div className="flex relative bottom-[-50px] w-full h-[100px] rotate-[180deg] bg-[url('/bg/delic_flav_footer.svg')] bg-cover bg-bottom self-stretch bg-no-repeat"></div>

            <div className="flex bg-[#FBE8EC] flex-col justify-center w-full min-h-[100vh] pt-[160px] bg-[url('/bg/delic_flav.svg')] bg-top bg-cover self-stretch bg-no-repeat">
                <div className="flex justify-center !font-rowdies !font-[400] text-[50px] leading-[60px] text-center text-pink-600 mb-[80px] px-[40px] md:px-[80px] xl:px-[120px]">
                    Our Flavoured Icreams
                </div>

                {/* TABS */}
                <div className='flex gap-x-[20px] p-[5px] overflow-hidden overflow-x-scroll ml-[40px] md:ml-[80px] xl:ml-[120px] pr-[50px]'>
                    {flavours?.map((item: any) => {
                        return (
                            <div
                                onClick={() => { setActiveTab(item?.id) }} key={item?.id}
                                className={`${item?.id == activeTab ? 'bg-pink-base text-white' : 'text-pink-base bg-white'} shadow-sm cursor-pointer flex items-center justify-center h-[50px] px-[40px] rounded-[30px] !font-outfit !font-[600] text-[1.25rem] text-nowrap`}
                            >
                                {item?.name}
                            </div>
                        )
                    })}
                </div>

                {/* PRODUCTS */}
                <div className={`grid grid-cols-12 mt-[100px] px-[40px] md:px-[80px] xl:px-[120px]`}>
                    <div className="col-start-1 col-end-13">
                        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[20px]`}>
                            {products?.map((item: any) => {
                                if (item?.type == activeTab) {
                                    return <ProductItem key={item?.id} data={item} />
                                }
                            })}
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex w-full h-[50px] bg-[url('/bg/delic_flav_footer.svg')] bg-cover bg-bottom self-stretch bg-no-repeat"></div>
        </>
    )
}

export default IceCreams