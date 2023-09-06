import { NextResponse } from "next/server";
import noteModel from "../../../../model/noteSchema";


export const POST = async (req:any) => {
    try {
        const {query,category} = await req.json()
        console.log(query , category);
        if(query && category){
        const data = await noteModel.find({title:{$regex:query},category:category}).populate({ path: 'category', model: 'Category', options: { strictPopulate: false }}).sort({updatedAt:-1})
        return NextResponse.json({success:true,data},{status:200})
        }
        
        if(query){
        const data = await noteModel.find({title:{$regex:query}}).populate({ path: 'category', model: 'Category', options: { strictPopulate: false }}).sort({updatedAt:-1})
        return NextResponse.json({success:true,data},{status:200})
        }
        
        if(category){
        const data = await noteModel.find({category:category}).populate({ path: 'category', model: 'Category', options: { strictPopulate: false }}).sort({updatedAt:-1})
        return NextResponse.json({success:true,data},{status:200})
    }
        
    } catch (error) {
        console.log(error);        
    }
}