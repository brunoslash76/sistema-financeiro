"use client";

import { EyeIcon } from "@/components/icons/EyeIcon";
import { daysOfTheWeek } from "@/lib/consts";
import { formatDate } from "@/lib/shared-functions";
import Image from "next/image";
import { useState } from "react";

export type BalanceProps = {
  username: string;
};

export function Balance({ username }: BalanceProps) {
  const [isVisible, setIsVisible] = useState(true);
  const dayWeek = daysOfTheWeek[(new Date().getDay()) - 1]
  const todaysDate = formatDate(new Date())

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div
      id="balance"
      className="bg-primary-400
                        flex 
                        rounded-lg
                        py-6
                        px-6
                        w-full
                        h-[400px]
                        text-white
                        relative"
    >
      <Image
        src="/Pixels1.png"
        alt=""
        width={180}
        height={178}
        className="absolute bottom-0 left-0"
      />
      <Image
        src="/Porquinho.png"
        alt=""
        width={250}
        height={250}
        className="absolute bottom-[30px] left-[60px]"
      />
      <Image
        src="/Pixels2.png"
        alt=""
        width={180}
        height={178}
        className="absolute top-0 right-0"
      />
      <div className="w-1/2 h-full">
        <h1 className="text-h1 font-bold mb-6">{`Olá, ${username} :)`}</h1>
        {`${dayWeek}, ${todaysDate}`}
      </div>
      <div className="w-1/2 py-8 px-8 h-full flex-col flex items-center justify-center">
        <div
          id="eye"
          className={`w-full flex items-center border-b-2 pb-[16px] ${
            isVisible ? "border-tertiary-400" : "border-primary-100"
          }`}
        >
          <span className="text-h2 font-bold mr-6">Saldo</span>
          <button onClick={toggleVisibility} className="focus:outline-none">
            <EyeIcon
              className={
                isVisible
                  ? "text-tertiary-400"
                  : "text-primary-100 hover:text-tertiary-400"
              }
            />
          </button>
        </div>
        <div id="conta" className="pt-[16px] self-start">
          Conta corrente
        </div>
        <div id="valor" className="pt-[8px] text-[31px] self-start">
          R$ {isVisible ? "2.500,00" : "***"}
        </div>
      </div>
    </div>
  );
}
