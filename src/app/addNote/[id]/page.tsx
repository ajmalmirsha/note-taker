'use client'
import { useParams } from "next/navigation";
import AddNote from "../page";

export default function EditNote () {
    const {id} = useParams()
    console.log('aparams',id);
    
    return (
        <AddNote _id={id} />
    )
}