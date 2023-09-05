import connectMongoDB from "@/libs/mongoDB";
import categorySchema from "../../../../model/categorySchema";
import { NextResponse } from "next/server";

export const GET = async (req:any) => {
    try {
           await connectMongoDB() 
           const results = await categorySchema.find({})
           const options = results.map((result:any) => ({
               label: result.label,
               value: result._id,
            }));
          return NextResponse.json({options},{status:200})
    } catch (error) {
        console.log(error);        
    }
}