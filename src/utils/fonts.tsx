import { Rowdies, Outfit } from "next/font/google"

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-outfit',
})
const rowdies = Rowdies({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-rowdies',
})

export const Fonts = {
    'outfit': outfit.className,
    'rowdies': rowdies.variable,
}
