'use client'
import { useEffect, useLayoutEffect, useState } from "react";
import Cards from "./Cards";
import { noteApi } from "@/utils/apis";
import Image from "next/image";
import dataLoader from '../../../public/gif/data-loading.gif'
import Pagination from "./Pagination";
import { PaginatorPageChangeEvent } from "primereact/paginator";
   
export default function List ({data,setData}:ListPropsType) {
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(4);
  const [loading,setLoading] = useState(false)
  const [DocCount,setDocCount] = useState(0)
    useEffect(()=>{
      console.log('hee');
      setLoading(true)
      noteApi.get('/api/getNotes').then(({data:{data,count}})=>{
        setLoading(false)
          setData(data)
          setDocCount(count)
          console.log('data feteched');
          console.log(data);          
      })
    },[])

        const onPageChange = (event: PaginatorPageChangeEvent) => {
            setFirst(event.first);
            setRows(event.rows);
            console.log('first', event.first);
            console.log('rows', event.rows);
            setLoading(true)
            noteApi.get('/api/getNotes/page/' + event.first).then(({data:{data}})=>{
              setLoading(false)
                setData(data)
                console.log(data);        
            })
        };

    return (
      <>
      {
        loading ? 
        <div className="flex justify-center items-center h-[80vh]">
        <Image src={dataLoader} /> 
        </div>
       : (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-3 p-7">
          {data.length > 0 &&
            data.map((x: any) => {
              return (
                <Cards title={x.title} content={x.content} category={x.category} _id={x._id} />
              );
            })}
        </div>
        <div className="flex justify-center">
            <Pagination onPageChange={onPageChange} count={DocCount} first={first} rows={rows}  />
        </div>
        </>
      )
      }
      </>
      )
}