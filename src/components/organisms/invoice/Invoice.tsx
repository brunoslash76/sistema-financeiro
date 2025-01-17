'use client'

import { InvoiceItem } from '@/components/atoms/invoiceItem/InvoiceItem';
import { useInvoiceProvider } from '@/lib/invoices-context';

export function Invoice() {
  const invoiceContext = useInvoiceProvider()
  const invoices = invoiceContext?.invoices

  return (
    <div className="bg-gray-200 w-full rounded-lg py-6 px-6">
                            
      <div className='flex justify-between items-center pb-4'>
        <h1 className='text-h1 font-bold'>Extrato</h1>
      </div>

      <div className=''>
        {invoices?.map((invoice) => (
          <InvoiceItem key={invoice.id} id={invoice.id} type={invoice.type} value={invoice.value} date={invoice.date}/>
        ))}
      </div>
            
    </div>
  )
}