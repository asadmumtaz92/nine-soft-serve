import type { Metadata } from "next";
import { Rowdies, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/page";


const inter = Rowdies({ subsets: ["latin"], weight:'400' });

export const metadata: Metadata = {
  title: {
    template: "%s - Cake Shop",
    default: "Cake Shop",
  },
  description: "",
  keywords: [
    "",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
       
          {children}
        
      
      </body>
    </html>
  );
}
