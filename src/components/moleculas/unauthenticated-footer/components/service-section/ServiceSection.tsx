import Link from "next/link";

export function ServiceSection() {
  return (
    <ul className="text-white text-[1rem] mb-8">
      <li className="mb-4">
        <p className="font-semibold text-base">
          Serviços
        </p>
      </li>
      <li className="mb-4">
        <Link href="#" className="text-base">
          Conta corrent
        </Link>
      </li>
      <li className="mb-4">
        <Link href="#" className="text-base">
          Conta PJ
        </Link>
      </li>
      <li>
        <Link href="#" className="text-base">
          Cartão de crédito
        </Link>
      </li>
    </ul>
  )
}
