import React from 'react'
import type { Metadata } from "next"
export const metadata: Metadata = {
    title: "Shop"
}
import ShopPage from '@/components/shop-page/page'

const Shop = () => {

    return <ShopPage />
}

export default Shop