export interface Invoice {
    id: string;
    type: string;
    value: number;
    date: string;
}

const invoices: Invoice[] = [    
    {
        id: '1111',
        type: 'Depósito',
        value: 300.00,
        date: '18/02/2024'    
    },

    {
        id: '1211',
        type: 'Saque',
        value: 300.00,
        date: '18/02/2024'    
    },
    {
        id: '1221',
        type: 'Depósito',
        value: 250.00,
        date: '18/02/2024'    
    },

    {
        id: '1222',
        type: 'Saque',
        value: 300.00,
        date: '18/02/2024'    
    }
]

export function useGetInvoices(id?: string) {
    if(id) {
        const invoice = invoices.find((i) => i.id === id)
        return invoice ? [invoice] : [] 
    }
    return invoices;
}

export function usePostInvoice(invoice: Invoice) {
    invoices.push(invoice)
};

export function usePatchInvoice(invoice: Invoice) {
    const editInvoice = invoices.find((i) => i.id === invoice.id);
    if(editInvoice) Object.assign(editInvoice, invoice)
};

export function useDeleteInvoices(id: string) {
    const index = invoices.findIndex((i) => i.id === id)
    if(index >= 0) invoices.splice(index, 1) 
}
