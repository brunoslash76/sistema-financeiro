"use client";

import { MainHeader } from "@/components/moleculas/main-header/MainHeader";
import { Balance } from "@/components/organisms/balance/Balance";
import { Invoice } from "@/components/organisms/invoice/Invoice";
import { Nav } from "@/components/organisms/nav/Nav";
import { sessionStorageKey } from "@/constants/sessionStorageToken";
import { GET_ACCOUNT } from "@/graphql/queries/getAccount";
import { setToken } from "@/lib/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { AccountQueryResult } from "@/types/accountQueryResult";
import { getSessionStorage } from "@/utils/storage";
import { useQuery } from "@apollo/client";
import { redirect } from "next/navigation";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { token } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const  { data } = useQuery<AccountQueryResult>(GET_ACCOUNT)

  const sessionToken = getSessionStorage(sessionStorageKey)

  if (!sessionToken && !token) {
    return redirect('/')
  } else if (sessionToken) {
    dispatch(setToken(sessionToken))
  }

  return (
    <main className="h-full w-full pt-[96px]">
      <MainHeader />
      <div className="mx-auto grid gap-6 mt-6 place-self-center lg:grid-cols-[180px_1fr_280px] lg:max-w-[1320px] w-full lg:px-[60px] md:px-[60px] px-6">
        <Nav />
        <div className="grid gap-y-6 w-full max-h-[774px]">
          <Balance balance={data?.account.balance} />
          {children}
        </div>
        <Invoice transactions={data?.account.transactions}/>
      </div>
    </main>
  );
}
