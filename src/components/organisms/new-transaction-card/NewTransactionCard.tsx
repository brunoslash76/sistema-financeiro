"use client";

import { updatePage } from "@/lib/actions";
import { useInvoiceProvider } from "@/lib/invoices-context";
import Image from "next/image";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function NewTransactionCard() {
  const { usePostInvoice } = useInvoiceProvider();
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
      className="bg-gray-400 rounded-lg py-6 px-6 lg:w-[690px] lg:h-[351px] text-primary-400 relative z-0"
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
            <select
              id="transaction-type"
              name="transactionId"
              required
              className="peer block w-full h-[48px] cursor-pointer rounded-md border border-primary-400 py-2 pl-2 text-p outline-2 text-center"
              defaultValue=""
              onChange={onChangeType}
            >
              <option value="" className="text-p" disabled selected>
                Selecione o tipo de transação
              </option>
              <option value="Depósito" className="text-p">
                Depósito
              </option>
              <option value="Saque" className="text-p">
                Saque
              </option>
              <option value="Transferência" className="text-p">
                Transferência
              </option>
            </select>
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
