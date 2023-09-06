'use client'
// import { useRouter } from "next/router";
// import { useParams } from "next/";
import AddNote from "../page";
import { useParams } from "next/navigation";

export default function EditNote () {
    const {id} = useParams();
    console.log('aparams',id);
    
    return (
        <AddNote _id={id} />
    )
}