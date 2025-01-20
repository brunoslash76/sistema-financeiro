'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter()

  function handleGoBack() {
    router.back()
  }

  return (
    <section className="flex flex-col pt-12 max-w-[1200px] mx-auto justify-center gap-8 text-black pb-10">
      <header className="w-full">
        <h1 className="text-2xl font-bold mx-auto text-center">Ops! Não encontramos a página...</h1>
      </header>
      <div>
        <p className="text-center">E olha que exploramos o universo procurando por ela!</p>
        <p className="text-center">Que tal voltar e tentar novamente?</p>
      </div>
      <button
        type="button"
        role="link"
        className="
          w-[144px]
          h-[48px]
          cursor-pointer
          rounded-md
          border
          border-tertiary-400
          bg-tertiary-400
          py-2
          pl-2
          text-p
          outline-2
          font-bold
        text-white
          mx-auto
        "
        onClick={handleGoBack}
      >
        Voltar ao início
      </button>
      <Image src="/404.png" alt="" width={470} height={354} className="place-self-center pb-6 lg:pb-20"/> 
    </section>
  )
}
  