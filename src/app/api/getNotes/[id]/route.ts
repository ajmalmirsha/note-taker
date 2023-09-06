import connectMongoDB from "@/libs/mongoDB";
import { NextResponse } from "next/server";
import noteModel from "../../../../../model/noteSchema";


export const GET = async (req:any) => {
    try {
        const params = req.url.split('getNotes/')[1]
        await connectMongoDB()
        const data = await noteModel.findOne({_id:params}).populate({ path: 'category', model: 'Category', options: { strictPopulate: false }})
        return NextResponse.json({success:true,data},{status:200})
    } catch (error) {
        console.log(error);
    }
}