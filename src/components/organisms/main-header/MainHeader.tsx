import { UserIcon } from "@/components/icons/UserIcon";

export function MainHeader() {
  return (
    <header className="w-full bg-primary-400 lg:p-6">
      <nav className="w-full flex justify-between">
        <div className="lg:hidden "></div>
        <div className="lg:ml-auto flex gap-8 ">
          <p>Joana da Silva Oliveira</p>
          <UserIcon />
        </div>
      </nav>
    </header>
  )
}
