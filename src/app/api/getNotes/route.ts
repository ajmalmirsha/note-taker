import connectMongoDB from "@/libs/mongoDB";
import { NextResponse } from "next/server";
import noteSchema from "../../../../model/noteSchema";


export const GET = async (req: any) => {
    try {
        await connectMongoDB()
        const data = await noteSchema.find({}).populate({ path: 'category', model: 'Category', options: { strictPopulate: false }}).sort({updatedAt:-1}).limit(4)
        const count = await noteSchema.countDocuments({});
        console.log(count, 'data', data);
        return NextResponse.json({ data, count }, { status: 200 })
    } catch (error) {
        console.log(error);
    }
}