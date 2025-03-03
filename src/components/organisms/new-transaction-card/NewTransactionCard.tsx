"use client";

import { ADD_TRANSACTION } from "@/graphql/mutations/addTransaction";
import { GET_ACCOUNT } from "@/graphql/queries/getAccount";
import { GET_TRANSACTION_TYPES } from "@/graphql/queries/getTransactionTypes";
import { OperationType, TransactionTypes } from "@/types/transactionTypes";
import { useMutation, useQuery } from "@apollo/client";
import Image from "next/image";
import { useForm } from "react-hook-form";


interface FormData {
  operationType: OperationType
  value: string
}

export function NewTransactionCard() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: {
      errors,
    },
  } = useForm<FormData>()
  const { data } = useQuery<TransactionTypes>(GET_TRANSACTION_TYPES)
  const [addTransaction] = useMutation(ADD_TRANSACTION, {
    onCompleted: () => {
      reset()
    },
    onError: (error) => {
      alert(error)
    },
    refetchQueries: [
      GET_ACCOUNT
    ]
  })
  
  function onSubmit(data: FormData) {
    if (!data.operationType) {
      return setError('operationType', { message: 'Selecione um tipo de transação'})
    }
    
    addTransaction({
      variables: {
        transaction: {
          value: Math.abs(parseFloat(data.value)),
          type: data.operationType,
        }
      }
    })
  }

  return (
    <div
      id="new-transaction"
      className="bg-gray-400 rounded-lg py-6 px-6 lg:h-[350px] text-primary-400 relative z-0"
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
          <h1 className="text-h1 font-bold">Nova Transação</h1>
          <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
              <select
                className="bg-white p-4 rounded-lg border border-primary-400"
                { ...register('operationType', { required: 'Selecione uma transação válida'})}
              >
                <option hidden value=''>Selecione uma transação</option>
                { data?.getTransactionTypes.map((transaction) => {
                  return (
                    <option key={transaction.display} value={transaction.value}>{transaction.display}</option>
                  )
                })}
              </select>
              {errors['operationType'] && <p className="text-red-600 absolute">{errors['operationType'].message}</p>}
            </div>
            <div className="grid gap-2">
              <label className="font-bold">Valor</label>
              <div className="relative">
                <input
                  id="transaction-value"
                  type="numeric"
                  step="0.01"
                  className="
                    peer
                    block
                    w-[184px]
                    h-[48px]
                    cursor-pointer
                    rounded-md
                    border
                    border-primary-400
                    py-2
                    pl-2
                    text-p
                    text-center
                    outline-2
                    text-primary-400
                  "
                  placeholder="0,00"
                  {...register('value', { required: 'Adicione um valor válido' })}
                />
                <span className="absolute top-3 left-4 text-primary-400">R$ </span>
                {errors['value'] && <p className="text-red-600 absolute">{errors['value'].message}</p>}
              </div>
            </div>
            <button
              type="submit"
              className="
                peer
                block
                w-[184px]
                h-[43px]
                cursor-pointer
                rounded-md
                border
                border-primary-400
                bg-primary-400
                py-2
                pl-2
                text-p
                outline-2
                font-bold
                text-white
              "
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
