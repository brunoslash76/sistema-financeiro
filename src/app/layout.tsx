'use client'

import { client } from "@/graphql/config";
import { ApolloProvider } from "@apollo/client";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { makeStore } from '../lib/store';
import "./globals.css";



export const experimental_ppr = true;

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter-font-sans",
  display: "swap",
});

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
        <Provider store={makeStore()}>
          <ApolloProvider client={client}>
            {children}
          </ApolloProvider>
        </Provider>
      </body>
    </html>
  );
}
