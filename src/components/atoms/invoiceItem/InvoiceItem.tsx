'use client';

import { EditIcon } from "@/components/icons/EditIcon";
import { TrashIcon } from "@/components/icons/TrashIcon";
import Link from "next/link";
import { ButtonIcon } from "../buttonIcon/ButtonIcon";


export type InvoiceItemProps = {
    id: string;
    type: string;
    value: number;
    date: Date;
};

export function InvoiceItem({id, type, value, date}: InvoiceItemProps) {
  // TODO: need to review this page
  return (
    <>
      <div className="flex flex-col border-b border-secondary-400 py-3">
        <small className="text-secondary-400 font-bold pb-1">{}</small>
        <div className="flex flex-row justify-between items-center">
          <p>{type}</p>
          <div className='flex gap-2'>
            <Link href={{pathname:`/dashboard/invoices/${id}/edit`, query:{id}}}>
              <ButtonIcon Icon={EditIcon} />
            </Link>
            <ButtonIcon Icon={TrashIcon} />
          </div>
                
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="font-bold">R$ {value}</p>
          <small className="text-gray-600">Nothing here</small>   
        </div>
      </div>
    </>
  )
}