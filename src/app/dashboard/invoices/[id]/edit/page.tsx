'use client'

import { updateInvoice } from "@/lib/actions";
import { useGetInvoices } from "@/lib/invoices-service";
import { useSearchParams } from "next/navigation";


export default function EditInvoice() {
    const idParam = useSearchParams()
    const id = idParam.get('id')
    const [invoice] = useGetInvoices(id)

    const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);

    return (
        <div 
        id='new-transaction'
        className="bg-gray-400 rounded-lg py-6 px-6 lg:w-[690px] lg:h-[351px] text-primary-400 relative z-0">
            <img src='/Pixels3.png' alt='' width={180} height={178} className="absolute bottom-0 left-0 -z-10"/>    
            <img src='/Pixels4.png' alt='' width={180} height={178} className="absolute top-0 right-0 -z-10"/>
              
            <div className='grid align-left py-4 lg:grid-cols-2'>
                <div className='grid gap-6'>
                    <h1 className='text-h1 font-bold '>Editar Transação</h1>
                    <form className='grid gap-6' action={updateInvoiceWithId}>
                        <select
                            id='transaction-type'
                            name="type"
                            className="peer block w-full h-[48px] cursor-pointer rounded-md border border-primary-400 py-2 pl-2 text-p outline-2 text-center"
                            defaultValue={invoice.type}
                            >
                                <option value="Depósito" className="text-p">Depósito</option>
                                <option value="Saque" className="text-p">Saque</option>
                                <option value="Transferência" className="text-p">Transferência</option>
                        </select>
                        <div className='grid gap-2'>
                            <label className='font-bold'>Valor</label>
                            <input id='transaction-value' name="value" type="number" step="0.01" className="peer block w-[184px] h-[48px] cursor-pointer rounded-md border border-primary-400 py-2 pl-2 text-p outline-2 text-primary-400" defaultValue={invoice.value} />
                        </div>
                        <button type="submit" className="peer block w-[184px] h-[43px] cursor-pointer rounded-md border border-primary-400 bg-primary-400 py-2 pl-2 text-p outline-2 font-bold text-white">Concluir Edição</button>                      
                   </form>
                </div>
                <div className='lg:col-start-2'>
                    <img src='/PersonWithCard.png' alt='Desenho de pessoa segurando cartão gigante' width={327} height={231} className="lg:mt-12 mt-8"/>
                </div>           
            </div>
        </div>
    )
}