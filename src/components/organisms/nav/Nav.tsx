"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();
  //   const isActive = (path: string) => pathname.startsWith(path);

  const navItems = [
    { href: "/dashboard", label: "Início" },
    { href: "/dashboard/exchanges", label: "Transferências" },
    { href: "/dashboard/investments", label: "Investimentos" },
    { href: "/dashboard/other-services", label: "Outros Serviços" },
  ];

  return (
    <nav className="bg-secondary-200 lg:bg-gray-200 lg:rounded-lg lg:py-6 lg:px-6 md:bg-transparent hidden md:block lg:block">
      <ul className="flex flex-col md:flex-row lg:flex-col text-primary-400 text-center whitespace-nowrap">
        {navItems.map((item, index) => {
          const isActive = pathname.startsWith(item.href) && !pathname.startsWith(`${item.href}/`);

          return (
            <li
              key={index}
              className={`flex flex-1 border-b lg:border-b border-b-primary-400 ${
                isActive
                  ? "font-bold lg:text-primary-400 lg:border-b-primary-400 md:text-secondary-400 md:border-b-secondary-400 md:border-b"
                  : "md:border-b-0"
              }`}
            >
              <Link href={item.href} className="py-4 w-full">
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
