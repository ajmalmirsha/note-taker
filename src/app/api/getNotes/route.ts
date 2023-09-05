import connectMongoDB from "@/libs/mongoDB";
import NoteSchema from "../../../../model/noteSchema";
import { NextResponse } from "next/server";


export const GET = async (req:any) => {
    try {
        await connectMongoDB()
        const data = await NoteSchema.find({}).populate({ path: 'category', model: 'Category', options: { strictPopulate: false } });

        console.log('data',data);
        
        return NextResponse.json({data},{status:200})
    } catch (error) {
        console.log(error);   
    }
}