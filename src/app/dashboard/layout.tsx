"use client";

import { MainHeader } from "@/components/moleculas/main-header/MainHeader";
import { sessionStorageKey } from "@/constants/sessionStorageToken";
import { setToken } from "@/lib/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getSessionStorage } from "@/utils/storage";
import { redirect } from "next/navigation";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { token } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

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
        {children}
      </div>
    </main>
  );
}
