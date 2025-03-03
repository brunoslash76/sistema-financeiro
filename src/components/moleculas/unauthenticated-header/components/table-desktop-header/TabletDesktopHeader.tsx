import { Button } from "@/components/atoms/button/Button";
import { Logo } from "@/components/icons/Logo";
import Link from "next/link";

export interface Props {
  handleOpenAccountButton: () => void
  handleOpenLoginButton: () => void
}

export function TabletDesktopHeader({
    handleOpenAccountButton,
    handleOpenLoginButton,
}: Props) {
  return (
    <section className="bg-black w-full px-4 flex-col items-center md:block hidden">
      <nav className="w-full max-w-[1200px] mx-auto flex justify-between items-center py-8">
        <ul className="flex items-end gap-8">
          <li>
            <Link href={"/"}>
              <Logo />
            </Link>
          </li>
          <li className="ml-8">
            <Link className="text-secondary-600" href="/sobre">
              Sobre
            </Link>
          </li>
          <li>
            <Link className="text-secondary-600" href="/servicos">
              Serviços
            </Link>
          </li>
        </ul>
        <div className="flex gap-8">
          <Button buttonType="regular" variant="secondary" onClick={handleOpenAccountButton}>
            Abrir minha conta
          </Button>
          <Button
            buttonType="outlined"
            variant="secondary"
            onClick={handleOpenLoginButton}
          >
            Já tenho conta
          </Button>
        </div>
      </nav>
    </section>
  )
}