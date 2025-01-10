import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { Extract } from "@/components/organisms/extract/Extract";
import { MainHeader } from "@/components/organisms/main-header/MainHeader";
import { Nav } from "@/components/organisms/nav/Nav";
import { Balance } from "@/components/organisms/balance/Balance";

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter-font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Sistema Financeiro - ABPW",
  description: "Grupo de Pós da FIAP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
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
          <Extract />
        </div>
        </main>
      </body>
    </html>
  );
}
