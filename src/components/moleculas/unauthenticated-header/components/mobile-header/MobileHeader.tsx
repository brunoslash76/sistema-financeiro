import { Button } from "@/components/atoms/button/Button";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { HamburgerMenuIcon } from "@/components/icons/HamburgerMenuIcon";
import { Logo } from "@/components/icons/Logo";
import Link from "next/link";

export interface Props {
  openMenu: boolean
  handleMenuClick: () => void
  handleOpenAccountButton: () => void
  handleOpenLoginButton: () => void
}

export function MobileHeader({
  handleMenuClick,
  handleOpenAccountButton,
  handleOpenLoginButton,
  openMenu,
}: Props) {
  return (
    <>
      <section className="bg-black w-full px-4 py-6 justify-between flex items-center md:hidden lg:hidden">
        <button
          className="border-none bg-transparent p-0"
          type="button"
          onClick={handleMenuClick}
        >
          <HamburgerMenuIcon />
        </button>
        <Logo />
      </section>
      <section className={`
        block
        h-full
        w-full
        bg-black
        absolute
        top-0
        z-50
        ${openMenu ? 'translate-x-0': 'translate-x-[-100%]'}
        ease-in-out
        duration-75
        p-4
        md:hidden
        lg:hidden

      `}>
        <div className="flex justify-between items-start  mb-16">
          <h2 className="font-semibold text-2xl text-gray-400">Menu</h2>
          <button className=" border-none bg-transparent p-2" type="button" onClick={handleMenuClick}>
            <CloseIcon color={'#DEDEDE'}/>
          </button>
        </div>
        <ul className="flex flex-col mb-16 justify-between h-[80%]">
          <li>
            <div className="mb-8">
              <Link className="text-secondary-600 text-2xl" href="/sobre">
                Sobre
              </Link>
            </div>
            <div>
              <Link className="text-secondary-600 text-2xl" href="/servicos">
                Serviços
              </Link>
            </div>
          </li>
          <li >
            <div className="mb-8">
              <Button
                className="w-full"
                buttonType="regular"
                variant="secondary"
                onClick={handleOpenAccountButton}
              >
                Abrir minha conta
              </Button>
            </div>
            <div className="mb-8">
              <Button
                className="w-full"
                buttonType="outlined"
                variant="secondary"
                onClick={handleOpenLoginButton}
              >
                Já tenho conta
              </Button>
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}
