'use client'
import { useLayoutEffect, useState } from "react";
import Cards from "./Cards";
import { noteApi } from "@/utils/apis";
  
   
export default function List () {
  const [data,setData] = useState([])
    useLayoutEffect(()=>{
      console.log('hee');
      
      noteApi.get('/api/getNotes').then(({data:{data}})=>{
          setData(data)
      })
    },[])
    return (
    <div className="grid grid-cols-2 gap-5 p-5" >
      {
        data.length > 0 &&
         data.map((x:any)=>{
          return(
          <Cards title={x.title} content={x.content} category={x.category} _id={x._id}  />
          )
         })
      }
    </div>
    )
}