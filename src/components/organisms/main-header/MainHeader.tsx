import { HamburguerIcon } from "@/components/icons/HamburguerIcon";
import { UserIcon } from "@/components/icons/UserIcon";

export function MainHeader() {
  return (
    <header className="w-full bg-primary-400 px-6 py-8 lg:px-36 lg:py-8 md:px-14 md:py-8">
      <nav className="w-full flex justify-between">
        <div className="md:hidden"><HamburguerIcon/></div>
        <div className="md:ml-auto flex gap-8 ">
          <p className="hidden text-white md:block">Joana da Silva Oliveira</p>
          <UserIcon  size={40} />
        </div>
      </nav>
    </header>
  )
}
