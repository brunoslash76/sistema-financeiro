'use server';

import { z } from 'zod';
import { redirect } from "next/navigation";
import { usePatchInvoice } from "./invoices-service";

const FormSchema = z.object({
    id: z.string(),
    type: z.enum(['Depósito', 'Saque', 'Transferência']),
    value: z.coerce.number(),
    date: z.string(),
});

const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function updateInvoice(id: string, formData: FormData, date: string) {
    const { type, value } = UpdateInvoice.parse({
        type: formData.get('type'),
        value: formData.get('value'),
    });

  const invoice = {id: id, type: type, value: value, date: date}
  usePatchInvoice(invoice)
 
  console.log(invoice)
  redirect('/dashboard');
}