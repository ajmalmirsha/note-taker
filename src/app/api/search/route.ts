import { NextResponse } from "next/server";
import noteModel from "../../../../model/noteSchema";


export const POST = async (req:any) => {
    try {
        const {query} = await req.json()
        const data = await noteModel.find({title:{$regex:query}})
        return NextResponse.json({success:true,data},{status:200})
    } catch (error) {
        console.log(error);        
    }
}