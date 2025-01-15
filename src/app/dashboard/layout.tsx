import { Balance } from "@/components/organisms/balance/Balance";
import { Invoice } from "@/components/organisms/invoice/Invoice";
import { MainHeader } from "@/components/organisms/main-header/MainHeader";
import { Nav } from "@/components/organisms/nav/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
    <>
        <MainHeader />
        <div className="px-6 py-8 lg:px-36 lg:py-8 md:px-14 md:py-8 grid grid-cols-1 lg:grid-cols-3  lg:grid-cols-[15%_64%_21%]  gap-6 lg:w-[1353px] place-self-center">
          <Nav />
          <div className="grid lg:h-[740px] lg:place-content-between gap-y-6">
          <Balance username="Joana" />
            {children}
          </div>
          <Invoice />
        </div>
    </>)
}