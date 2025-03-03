'use client'

import { CashWithdrawDraw } from "@/components/images/CashWithdrawDraw";
import { DevicesDraw } from "@/components/images/DevicesDraw";
import { GiftDraw } from "@/components/images/GiftDraw";
import { HomeDraw } from "@/components/images/HomeDraw";
import { StarDraw } from "@/components/images/StarDraw";
import { LoginForm } from "@/components/organisms/login-form/LoginForm";
import { SignupForm } from "@/components/organisms/signup-form/SignUpForm";

export default function Home() {

  return (
    <>
      <section className="pt-4 max-w-[1200px] mx-auto ">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-center">
            Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!
          </h1>
          <section className="w-full">
            <HomeDraw className="w-full"/>
          </section>        
        </div>

        <div className="w-full mb-20">
          <header className="w-full mb-8">
            <h2 className="text-2xl font-semibold mx-auto text-center">
              Vantagens do nosso banco:
            </h2>
          </header>
          <section
            className="
              flex
              flex-col
              items-center
              mx-auto
              w-full
              md:flex-wrap
              md:flex-row
              md:justify-center
              md:gap-8
              lg:justify-between
              lg:gap-4
              lg:items-start
            "
          >
            <article className="w-full max-w-[282px] flex items-center flex-col mb-10">
              <div className="mb-4">
                <GiftDraw />
              </div>
              <p className="text-secondary-400 font-semibold text-xl">
                Conta e cartão gratuitos
              </p>
              <p className="text-center text-[#767676]">
                Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.
              </p>
            </article>
            <article className="w-full max-w-[282px] flex items-center flex-col mb-10">
              <div className="mb-4">
                <CashWithdrawDraw />
              </div>
              <p className="text-secondary-400 font-semibold text-xl">
                Saques sem custo
              </p>
              <p className="text-center text-[#767676]">
                Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.
              </p>
            </article>
            <article className="w-full max-w-[282px] flex items-center flex-col mb-10">
              <div className="mb-4">
                <StarDraw />
              </div>
              <p className="text-secondary-400 font-semibold text-xl">Programa de pontos</p>
              <p className="text-center text-[#878787]">
                Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!
              </p>
            </article>
            <article className="w-full max-w-[282px] flex items-center flex-col">
              <div className="mb-4">
                <DevicesDraw />
              </div>
              <p className="text-secondary-400 font-semibold text-xl">
                Seguro Dispositivos
              </p>
              <p className="text-center text-[#767676]">
                Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.
              </p>
            </article>
          </section>
        </div>
      </section>
      <SignupForm />
      <LoginForm />
    </>
  )
}
