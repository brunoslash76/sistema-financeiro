import { InvoiceItem } from '@/components/atoms/invoiceItem/InvoiceItem';
import { useGetInvoices } from '@/lib/invoices-service';

export function Invoice() {
    const invoices = useGetInvoices()

    return (
        <div className="bg-gray-200 w-full rounded-lg py-6 px-6 lg:w-[250px]">
                            
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