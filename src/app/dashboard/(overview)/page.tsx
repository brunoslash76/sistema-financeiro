'use client'

import { Balance } from "@/components/organisms/balance/Balance";
import { Invoice } from "@/components/organisms/invoice/Invoice";
import { Nav } from "@/components/organisms/nav/Nav";
import { NewTransactionCard } from "@/components/organisms/new-transaction-card/NewTransactionCard";
import { GET_ACCOUNT } from "@/graphql/queries/getAccount";
import { AccountQueryResult } from "@/types/accountQueryResult";
import { useQuery } from "@apollo/client";

export default function Home() {
  const  { data } = useQuery<AccountQueryResult>(GET_ACCOUNT)

  return (
    <>
      <Nav />
      <div className="grid gap-y-6 w-full max-h-[774px]">
        <Balance balance={data?.account.balance} />
        <NewTransactionCard />
      </div>
      <Invoice transactions={data?.account.transactions}/>
    </>
  );
}
