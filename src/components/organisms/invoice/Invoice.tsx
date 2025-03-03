'use client'

import { Transaction } from "@/types/accountQueryResult"
import { OperationType } from "@/types/transactionTypes"
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Props {
  transactions: Transaction[] | null | undefined
}

const transactionTypeDictionary: {[key in OperationType]: string} = {
  deposito: 'Depósito',
  saque: 'Saque',
  transferencia: 'Transferência',
}

export function Invoice({ transactions }: Props) {
  return (
    <div className="bg-gray-200 w-full rounded-lg py-6 px-6">                            
      <div className='flex justify-between items-center pb-4'>
        <h1 className='text-h1 font-bold'>Extrato</h1>
      </div>
      <div className=''>
        {transactions?.map(transaction => (
          <div key={transaction._id} className="mb-8 border border-b-secondary-400 pb-2">
            <header>
              <p className="capitalize font-semibold text-secondary-400 text-sm">
                {format(transaction.createdAt, 'MMMM', { locale: ptBR})}
              </p>
            </header>
            <section className="flex items-start justify-between">
              <div>
                <p className="">{transactionTypeDictionary[transaction.type]}</p>
                <p className="font-semibold">R$ {Math.abs(transaction.value).toFixed(2).replace('.', ',')}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">{format(transaction.createdAt, 'dd/MM/yyyy')}</p>
              </div>
            </section>
          </div>
        ))}
      </div>           
    </div>
  )
}
