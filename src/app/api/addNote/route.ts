import categorySchema from "../../../../model/categorySchema";
import connectMongoDB from "@/libs/mongoDB";
import { NextResponse } from "next/server";
import noteSchema from "../../../../model/noteSchema";
export const POST = async (req:any)=> {
    try {     
        await connectMongoDB()
        const { title, content, category } = await req.json()        
        let cata:cataType
        let res
        if(category?.__isNew__){
            const {label,value} = category
            cata = await categorySchema.findOneAndUpdate({value:value},{$set:{label,value}},{upsert:true,new:true})
            console.log(333,cata);
            
            res = await noteSchema.findOneAndUpdate({title},{$set:{title,content,category : cata?._id}},{upsert:true,new:true})           
            console.log(4353,res);
            return NextResponse.json({message:'saved',_id:res._id},{status:200})
        }else {
            console.log('exisiteing cata',category);
            
            res = await noteSchema.findOneAndUpdate({title},{$set:{title,content,category: category.value}},{upsert:true,new:true})
            console.log(res);
            
            return NextResponse.json({message:'saved',_id:res._id},{status:200})
        }
        
    } catch (error) {
        console.log(error);
    } 
}
export const PUT = async (req:any)=> {
    try {     
        await connectMongoDB()
        const { _id, content } = await req.json()
            await noteSchema.updateOne({_id},{$set:{content}})
            console.log('updated');
            return NextResponse.json({success:true,message:'updated'},{status:200})
            
    } catch (error) {
        console.log(error);
    } 
}