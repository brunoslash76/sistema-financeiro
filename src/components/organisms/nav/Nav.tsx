"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  //   const isActive = (path: string) => pathname.startsWith(path);

  return (
    <nav className="bg-secondary-200 lg:bg-gray-200 lg:rounded-lg lg:py-6 lg:px-6 md:bg-transparent hidden md:block lg:block">
      <ul className="flex flex-col md:flex-row lg:flex-col text-primary-400 text-center whitespace-nowrap">
        <li
          className={`flex flex-1 border-b md:border-b-0 lg:border-b border-b-primary-400 ${
            pathname === "/dashboard"
              ? "font-bold lg:text-primary-400 lg:border-b-primary-400 md:text-secondary-400 md:border-b-secondary-400 md:border-b"
              : ""
          }`}
        >
          <Link href="/dashboard" className="py-4 w-full">
            Início
          </Link>
        </li>
        <li className="flex flex-1 border-b md:border-b-0 lg:border-b border-b-primary-400">
          <Link href="/dashboard/exchanges" className="py-4 w-full">
            Transferências
          </Link>
        </li>
        <li className="flex flex-1 border-b md:border-b-0 lg:border-b border-b-primary-400">
          <Link href="/dashboard/investments" className="py-4 w-full">
            Investimentos
          </Link>
        </li>
        <li className="flex flex-1">
          <Link href="/dashboard/other-services" className="py-4 w-full">
            Outros Serviços
          </Link>
        </li>
      </ul>
    </nav>
  );
}
