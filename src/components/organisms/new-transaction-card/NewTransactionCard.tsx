"use client";

import DropdownMenu from "@/components/moleculas/dropdown-menu/DropdownMenu";
import Image from "next/image";
import { useState } from "react";
import { updatePage } from "@/lib/actions";
import { useInvoiceProvider } from "@/lib/invoices-context";
import { v4 as uuidv4 } from "uuid";

export function NewTransactionCard() {
  const { usePostInvoice } = useInvoiceProvider();
  
  const [selected, setSelected] = useState("");

  const [newInvoice, setNewInvoice] = useState({
    id: uuidv4(),
    type: "Deposito",
    value: 0,
    date: new Date(),
  });

  const onChangeType = (event) => {
    const value = event.target.value;
    setNewInvoice({ ...newInvoice, type: value });
  };

  const onChangeValue = (event) => {
    const value = event.target.value;
    setNewInvoice({ ...newInvoice, value: value });
  };

  const createInvoice = (event) => {
    event.preventDefault();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePostInvoice(newInvoice);
    updatePage();
  };
  return (
    <div
      id="new-transaction"
      className="bg-gray-400 rounded-lg py-6 px-6 lg:h-[351px] text-primary-400 relative z-0"
    >
      <Image
        src="/Pixels3.png"
        alt=""
        width={180}
        height={178}
        className="absolute bottom-0 left-0 -z-10"
      />
      <Image
        src="/Pixels4.png"
        alt=""
        width={180}
        height={178}
        className="absolute top-0 right-0 -z-10"
      />

      <div className="grid align-left py-4 lg:grid-cols-2">
        <div className="grid gap-6">
          <h1 className="text-h1 font-bold ">Nova Transação</h1>
          <form className="grid gap-6" onSubmit={createInvoice}>
            <DropdownMenu
              selected={selected}
              setSelected={setSelected}
              options={[
                "Câmbio de Moeda",
                "DOC/TED",
                "Empréstimo e Financiamento",
              ]}
              placeholder="Selecione o tipo de transação"
            ></DropdownMenu>
            <div className="grid gap-2">
              <label className="font-bold">Valor</label>
              <input
                id="transaction-value"
                className="peer block w-[184px] h-[48px] cursor-pointer rounded-md border border-primary-400 py-2 pl-2 text-p outline-2 text-primary-400"
                placeholder="0"
                onChange={onChangeValue}
              />
            </div>
            <button
              type="submit"
              className="peer block w-[184px] h-[43px] cursor-pointer rounded-md border border-primary-400 bg-primary-400 py-2 pl-2 text-p outline-2 font-bold text-white"
            >
              Concluir Transação
            </button>
          </form>
        </div>
        <div className="lg:col-start-2">
          <Image
            src="/PersonWithCard.png"
            alt="Desenho de pessoa segurando cartão gigante"
            width={327}
            height={231}
            className="lg:mt-12 mt-8"
          />
        </div>
      </div>
    </div>
  );
}
