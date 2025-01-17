import { HamburguerIcon } from "@/components/icons/HamburguerIcon";
import { UserIcon } from "@/components/icons/UserIcon";

export function MainHeader() {
  return (
    <header className="flex justify-center w-full bg-primary-400 h-[96px] lg:px-[60px] md:px-[60px] px-6">
      <nav className="w-full lg:max-w-[1200px] flex justify-between items-center">
        <div className="md:hidden">
          <HamburguerIcon />
        </div>
        <div className="md:ml-auto flex items-center gap-8">
          <p className="hidden text-white md:block">Joana da Silva Oliveira</p>
          <UserIcon size={40} />
        </div>
      </nav>
    </header>
  );
}
