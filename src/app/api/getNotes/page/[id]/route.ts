import connectMongoDB from "@/libs/mongoDB";
import { NextResponse } from "next/server";
import noteSchema from '../../../../../../model/noteSchema'

export const GET = async (req: any) => {
    try {
        const params = req.url.split('page/')[1]          
        await connectMongoDB()
        const data = await noteSchema.find({}).populate({ path: 'category', model: 'Category', options: { strictPopulate: false }}).sort({updatedAt:-1}).skip(parseInt(params)).limit(4)
        return NextResponse.json({ data }, { status: 200 })
    } catch (error) {
        console.log(error);
    }
}