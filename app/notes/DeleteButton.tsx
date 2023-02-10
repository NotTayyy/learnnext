'use client'

import { useRouter } from "next/navigation"

export default function DeleteButton(notes:any) {
    const {id, title} = notes

    const router = useRouter();

    const deleteThis = ( ) => {
        fetch(`http://127.0.0.1:8090/api/collections/notePad/records/${id}`, {
            method: 'DELETE'
        }).then(() => {
            alert(`Note ${title}, Has been Deleted`)
        })
        router.refresh()
    }



    return (
        <button onClick={deleteThis}>Delete Note</button>
    )
}