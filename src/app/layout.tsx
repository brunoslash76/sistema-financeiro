import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

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
            {children}
          </main>
        </body>
    </html>
  );
}
