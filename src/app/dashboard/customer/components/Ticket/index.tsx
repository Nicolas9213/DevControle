"use client"

import { api } from "@/lib/api";
import { ModalContext } from "@/providers/modal";
import { CustomerProps } from "@/utils/customer.type";
import { TicketProps } from "@/utils/ticket.type";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FiCheckSquare, FiFile } from "react-icons/fi";

interface TicketItemProps {
    ticket: TicketProps;
    customer: CustomerProps | null;
}

export function TicketItem({ customer, ticket }: TicketItemProps) {
    const router = useRouter();
    const { handleModalVisible, setDetailTicket } = useContext(ModalContext)

    async function handleChangeStatus() {
        try {
            const response = await api.patch("/api/ticket", {
                id: ticket.id,
            })
            router.refresh();
        } catch(err) {
            console.log(err);
        }
    }

    function handleOpenModal() {
        handleModalVisible();
        setDetailTicket({
            customer: customer,
            ticket: ticket
        })
    }

    return (
        <>
            <tr className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-100 hover:bg-gray-200 duration-300">
                <td className="text-left pl-4">
                    {customer?.name}
                </td>
                <td className="text-left hidden sm:table-cell">
                    {customer?.created_at?.toLocaleDateString("pt-br")}
                </td>
                <td className="text-left">
                    <span className="bg-green-500 px-2 rounded">{ticket.status}</span>
                </td>
                <td className="text-left">
                    <button className="mr-3" onClick={handleChangeStatus}>
                        <FiCheckSquare size={24} color="#2c2929"/>
                    </button>
                    <button onClick={handleOpenModal}>
                        <FiFile size={24} color="#3b82f6"/>
                    </button>
                </td>
            </tr>
        </>
    )
}