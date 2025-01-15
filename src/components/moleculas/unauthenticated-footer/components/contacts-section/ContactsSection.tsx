import Link from "next/link";

export function ContactSection() {
  return (
    <ul className="text-white text-[1rem] mb-8">
      <li className="mb-4">
        <p className="font-semibold text-base">Contato</p>
      </li>
      <li className="mb-4">
        <Link href="tel:080000425008" className="text-base">
          0800 004 250 08
        </Link>
      </li>
      <li className="mb-4">
        <Link href="mailto:meajuda@bytebanck.com.br" className="text-base">
          meajuda@bytebanck.com.br
        </Link>
      </li>
      <li>
        <Link href="mailto:ouvidoria@bytebanck.com.br" className="text-base">
          ouvidoria@bytebank.com.br
        </Link>
      </li>
    </ul>
  )
}
