import { MainHeader } from "@/components/moleculas/main-header/MainHeader";
import { Balance } from "@/components/organisms/balance/Balance";
import { Extract } from "@/components/organisms/extract/Extract";
import { Nav } from "@/components/organisms/nav/Nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter-font-sans",
  display: "swap",
});

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
          <div className="grid gap-6 mt-6 place-self-center lg:grid-cols-[180px_1fr_280px] lg:max-w-[1320px] w-full lg:px-[60px] md:px-[60px] px-6">
            <Nav />
            <div className="grid gap-y-6 w-full">
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
