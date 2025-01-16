'use client'

import { MainHeader } from "@/components/moleculas/main-header/MainHeader";
import { Balance } from "@/components/organisms/balance/Balance";
import { Nav } from "@/components/organisms/nav/Nav";
import { Inter } from 'next/font/google';
import "../globals.css";
import { Invoice } from "@/components/organisms/invoice/Invoice";

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter-font-sans',
  display: 'swap',
})

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className={`
          ${inter.variable}
          antialiased
          h-[100vh]
          w-full
          bg-secondary-200
        `} 
      >
        <main className="h-full">
          <MainHeader />
          <div className="px-6 py-8 lg:px-36 lg:py-8 md:px-14 md:py-8 grid grid-cols-1 lg:grid-cols-3  lg:grid-cols-[15%_64%_21%]  gap-6 lg:w-[1353px] place-self-center">
            <Nav />
            <div className="grid lg:h-[740px] lg:place-content-between gap-y-6">
              <Balance username="Joana" />
              {children}
            </div>
            <Invoice/>
          </div>
        </main>
      </div>
    </>
  );
}
