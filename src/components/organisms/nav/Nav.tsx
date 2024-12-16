import Link from "next/link";

export function Nav() {
    return (
       <nav className="bg-secondary-200 
                    lg:bg-gray-200 
                    lg:rounded-lg
                    lg:py-6
                    lg:px-6
                    lg:w-[165px]
                    md:bg-transparent">
            <ul className="flex flex-col md:flex-row lg:flex-col text-primary-400 text-center">
                <li className="flex flex-1 border-b md:border-b-0 lg:border-b border-b-primary-400 active:text-secondary-400 active:font-bold active:border-b-secondary-400 active:border-b-2"><Link href={'#'} className="py-4 w-full">Início</Link></li>
                <li className="flex flex-1 border-b md:border-b-0 lg:border-b border-b-primary-400"><Link href={'#'} className="py-4 w-full">Transferências</Link></li>
                <li className="flex flex-1 border-b md:border-b-0 lg:border-b border-b-primary-400"><Link href={'#'} className="py-4 w-full">Investimentos</Link></li>
                <li className="flex flex-1"><Link href={'#'} className="py-4 w-full">Outros Serviços</Link></li>
            </ul>
       </nav> 
    )
}