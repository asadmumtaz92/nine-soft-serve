import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                pink: {
                    "base": "#FD85B2",
                    "400": "#FF5394",
                    "600": "#E34F4D",
                },
                brown: {
                    "base": "#5A3956"
                }
            },
            fontFamily: {
                outfit: ['var(--font-outfit)'],
                rowdies: ['var(--font-rowdies)'],
            },

            keyframes: {
                scroll: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                rotate: {
                    '0%, 10%': { transform: 'rotate(0deg)' },
                    '50%': { transform: 'rotate(30deg)' },
                  },
            },
            animation: {
                scrollingLogo: "scroll 500s linear infinite",
                rotate: 'rotate 1s linear infinite',
            },
        },
    },
    plugins: [],
}

export default config
