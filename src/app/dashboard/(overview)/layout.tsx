'use client'

import { Balance } from "@/components/organisms/balance/Balance";
import { Invoice } from "@/components/organisms/invoice/Invoice";
import { GET_ACCOUNT } from "@/graphql/queries/getAccount";
import { AccountQueryResult } from "@/types/accountQueryResult";
import { useQuery } from "@apollo/client";

export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const  { data } = useQuery<AccountQueryResult>(GET_ACCOUNT)

  return (
    <>
      <div className="w-full mb-8">
        <div className="mb-8">
          <Balance balance={data?.account.balance} />
        </div>
        {children}
      </div>
      <Invoice transactions={data?.account.transactions}/>
    </>
  )
}