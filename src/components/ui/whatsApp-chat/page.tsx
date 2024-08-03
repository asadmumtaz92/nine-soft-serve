'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const WhatsAppChat = () => {

    const [show, setShow] = useState(false)
    const [showChat, setShowChat] = useState(false)
    const modalHandler = () => setShow(!show)
    const chatModalHandler = () => { setShowChat(false); setShowChat(!showChat) }

    return (
        <>
            <Image onClick={modalHandler} src={'/icons/whatsapp.svg'} alt="icon" height={63} width={59} className="hover:opacity-[0.9] z-[11] cursor-pointer fixed bottom-[20px] right-[20px] min-w-[200px] w-auto" />

            {show && <div className="flex flex-col fixed bottom-[78px] right-[20px] z-[11] w-[375px] h-[440px] bg-white border-[0.5px] rounded !overflow-hidden">
                {/* HEADER */}
                <div className="bg-[url('/bg/wa.svg')] bg-top w-[375px] bg-no-repeat h-full [200px] relative">
                    {/* Close Ixon */}
                    <Image onClick={modalHandler} src={'/icons/close.svg'} alt="icon" height={24} width={24} className="absolute right-[20px] top-[10px] cursor-pointer" />
                    <h1 className="!font-[700] text-[1rem] text-white px-[20px] mt-2">Hello</h1>
                    <p className="!font-[100] text-[0.80rem] leading-[1rem] text-white px-[20px] w-[85%] mt-2">
                        Click one of our contacts below to chat on WhatsApp<br />Our Agents are available 9:00 am to 5:00 pm Atlantic Time.
                    </p>
                </div>

                {/* BODY */}
                <div className="flex flex-1 flex-col bg-white absolute top-[115px] w-full h-[325px] overflow-hidden overflow-scroll btr">
                    <div onClick={chatModalHandler} className="flex border-b-[0.5px] items-center px-[20px] py-[10px] cursor-pointer">
                        <div className="w-[40px] h-[40px] rounded-[30px] bg-[#BFBFBF]"></div>
                        <div className="flex flex-col ml-4">
                            <h1 className="text-[0.9rem] leding-[0.9rem] !font-[700] !font-[]">Jennie</h1>
                            <p className="text-[0.8rem] leading-[0.8rem]">Customer Care</p>
                        </div>
                    </div>

                    <div onClick={chatModalHandler} className="flex border-b-[0.5px] items-center px-[20px] py-[10px] cursor-pointer">
                        <div className="w-[40px] h-[40px] rounded-[30px] bg-[#BFBFBF]"></div>
                        <div className="flex flex-col ml-4">
                            <h1 className="text-[0.9rem] leding-[0.9rem] !font-[700] !font-[]">Jennie</h1>
                            <p className="text-[0.8rem] leading-[0.8rem]">Customer Care</p>
                        </div>
                    </div>

                    <div onClick={chatModalHandler} className="flex border-b-[0.5px] items-center px-[20px] py-[10px] cursor-pointer">
                        <div className="w-[40px] h-[40px] rounded-[30px] bg-[#BFBFBF]"></div>
                        <div className="flex flex-col ml-4">
                            <h1 className="text-[0.9rem] leding-[0.9rem] !font-[700] !font-[]">Jennie</h1>
                            <p className="text-[0.8rem] leading-[0.8rem]">Customer Care</p>
                        </div>
                    </div>

                    <div onClick={chatModalHandler} className="flex border-b-[0.5px] items-center px-[20px] py-[10px] cursor-pointer">
                        <div className="w-[40px] h-[40px] rounded-[30px] bg-[#BFBFBF]"></div>
                        <div className="flex flex-col ml-4">
                            <h1 className="text-[0.9rem] leding-[0.9rem] !font-[700] !font-[]">Jennie</h1>
                            <p className="text-[0.8rem] leading-[0.8rem]">Customer Care</p>
                        </div>
                    </div>

                    <div onClick={chatModalHandler} className="flex border-b-[0.5px] items-center px-[20px] py-[10px] cursor-pointer">
                        <div className="w-[40px] h-[40px] rounded-[30px] bg-[#BFBFBF]"></div>
                        <div className="flex flex-col ml-4">
                            <h1 className="text-[0.9rem] leding-[0.9rem] !font-[700] !font-[]">Jennie</h1>
                            <p className="text-[0.8rem] leading-[0.8rem]">Customer Care</p>
                        </div>
                    </div>

                    <div onClick={chatModalHandler} className="flex border-b-[0.5px] items-center px-[20px] py-[10px] cursor-pointer">
                        <div className="w-[40px] h-[40px] rounded-[30px] bg-[#BFBFBF]"></div>
                        <div className="flex flex-col ml-4">
                            <h1 className="text-[0.9rem] leding-[0.9rem] !font-[700] !font-[]">Jennie</h1>
                            <p className="text-[0.8rem] leading-[0.8rem]">Customer Care</p>
                        </div>
                    </div>

                    <div onClick={chatModalHandler} className="flex border-b-[0.5px] items-center px-[20px] py-[10px] cursor-pointer">
                        <div className="w-[40px] h-[40px] rounded-[30px] bg-[#BFBFBF]"></div>
                        <div className="flex flex-col ml-4">
                            <h1 className="text-[0.9rem] leding-[0.9rem] !font-[700] !font-[]">Jennie</h1>
                            <p className="text-[0.8rem] leading-[0.8rem]">Customer Care</p>
                        </div>
                    </div>
                </div>
            </div>
            }

            {showChat && <div className="flex flex-col fixed bottom-[78px] right-[20px] z-[11] w-[375px] h-[440px] bg-white border-[0.5px] rounded !overflow-hidden">
                {/* HEADER */}
                <div className="bg-[url('/bg/wa.svg')] bg-top w-[375px] bg-no-repeat h-full relative">
                    {/* Close Ixon */}
                    <Image onClick={chatModalHandler} src={'/icons/close.svg'} alt="icon" height={24} width={24} className="absolute right-[20px] top-[10px] cursor-pointer" />
                    <div onClick={chatModalHandler} className="text-white flex h-[115px] items-center px-[20px] py-[10px]">
                        <Image onClick={chatModalHandler} src={'/icons/icon-back.svg'} alt="icon" height={16} width={8} className=" mr-6 cursor-pointer" />

                        <div className="w-[60px] h-[60px] rounded-[30px] bg-[#BFBFBFCC]"></div>
                        <div className="flex flex-col ml-4">
                            <h1 className="text-[0.9rem] leding-[1rem] !font-[700] !font-[]">Jennie</h1>
                            <p className="text-[0.8rem] leading-[0.9rem] mt-2">Customer Care</p>
                        </div>
                    </div>
                </div>

                {/* BODY */}
                <div className="flex flex-1 flex-col bg-white absolute top-[115px] w-full h-[325px] overflow-hidden overflow-scroll btr pt-3">
                    <div className="flex flex-col gap-y-[20px] rounded-2xl mx-6 flex-1">
                        <p className='px-4 flex items-center bg-[#F3FBF2] w-full h-[40px] rounded-2xl'>Hello how can i help you?</p>
                        <p className='px-4 py-2 flex items-center bg-[#F3FBF2] w-full h-[40px] rounded-2xl justify-end'>Hello! I'm looking on specific flavour</p>
                        <p className='px-4 flex items-center bg-[#F3FBF2] w-full h-[40px] rounded-2xl'>Which flavour you want?</p>
                    </div>
                    <div className="flex items- bg-[#F3FBF2] w-full h-[50px]">
                        <input placeholder='Write text here...' className='pl-5 bg-[#F3FBF2] w-full h-[48px] !outline-0 !ring-0 pr-2' />
                        <Image src={'/icons/btn-send.svg'} alt="icon" height={30} width={30} className=" mr-6 cursor-pointer" />
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default WhatsAppChat