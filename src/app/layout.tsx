import { UnauthenticatedFooter } from "@/components/moleculas/unauthenticated-footer/UnauthenticatedFooter";
import { UnauthenticatedHeader } from "@/components/moleculas/unauthenticated-header/UnauthenticatedHeader";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

export const experimental_ppr = true;

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
          h-[100%]
          w-full
          bg-gradient-to-b
          from-primary-400
          from-5%
          to-secondary-200
          to-70%
          bg-no-repeat
          bg-cover
        `} 
      >
        <main className="h-full w-full flex flex-col">
          <UnauthenticatedHeader />
          <div className="w-full mx-auto mb-auto px-4">
            {children}
          </div>
          <UnauthenticatedFooter />
        </main>
      </body>
    </html>
  );
}
