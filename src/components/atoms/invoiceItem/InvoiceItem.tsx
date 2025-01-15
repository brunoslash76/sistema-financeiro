'use client';

import { EditIcon } from "@/components/icons/EditIcon";
import { ButtonIcon } from "../buttonIcon/ButtonIcon";
import Link from "next/link";
import { TrashIcon } from "@/components/icons/TrashIcon";
import { months } from "@/lib/consts";
import { createContext } from "react";

export type InvoiceItemProps = {
    id: string;
    type: string;
    value: number;
    date: string;
};

export const InvoiceContext = createContext({});

export function InvoiceItem({id, type, value, date}: InvoiceItemProps) {

    return (
        <InvoiceContext.Provider value={{id}}>
        <div className="flex flex-col border-b border-secondary-400 py-3">

            <small className="text-secondary-400 font-bold pb-1">{months[3]}</small>

            <div className="flex flex-row justify-between items-center">
                <p>{type}</p>
                <div className='flex gap-2'>
                <Link href={{pathname:`/dashboard/invoices/${id}/edit`, query:{id}}}>
                    <ButtonIcon icon={EditIcon} />
                </Link>
                    <ButtonIcon icon={TrashIcon} />
                </div>
                
            </div>
            <div className="flex flex-row justify-between items-center">
                <p className="font-bold">R$ {value}</p>
            <small className="text-gray-600">{date}</small>   
            </div>
        </div>
        </InvoiceContext.Provider>
    )
}