'use client'
import { useEffect, useLayoutEffect, useState } from "react";
import Cards from "./Cards";
import { noteApi } from "@/utils/apis";
import Image from "next/image";
import dataLoader from '../../../public/gif/data-loading.gif'
import Pagination from "./Pagination";
import { PaginatorPageChangeEvent } from "primereact/paginator";
import Search from "./Search";
import CategorySelect from "./CategorySelect";
   
export default function List () {
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(4);
  const [loading,setLoading] = useState(false)
  const [DocCount,setDocCount] = useState(0)
  const [search,setSearch] = useState('')
  const [data,setData] = useState([])
  const [category,setCategory] = useState(null)
  /* eslint-disable */
  useEffect(()=>{
    if(!search && !category?.value){
      setLoading(true)
      noteApi.get('/api/getNotes').then(({data:{data,count}})=>{
        setLoading(false)
          setData(data)
          setDocCount(count)
          console.log('data feteched');
          console.log(data);          
        })
    }else if(category?.value && !search){
      setLoading(true)
      noteApi.post('/api/search',{query:search,category:category?.value}).then(({data:{data}})=>{
        setLoading(false)
        console.log('res',data)
        setDocCount(data.length)
        setData(data)
      })
    }
    },[search])

    const onPageChange = (event: PaginatorPageChangeEvent) => {
      setFirst(event.first);
      setRows(event.rows);
      console.log('first', event.first);
      console.log('rows', event.rows);
      setLoading(true);
      noteApi.get('/api/getNotes/page/' + event.first).then(({ data: { data } }) => {
        setLoading(false);
        setData(data);
        console.log(data);
      });
    };
    

        const handleChange = (e:any) => {
          try {
            setSearch(e.target.value)
          } catch (error) {
            console.log(error);      
          }
        }
        const handleSelect = async (e:any) => {
          try {
            setCategory(e)
            setLoading(true)
            const {data:{data}} = await noteApi.post('/api/search',{query:search,category:e.value})
            setLoading(false)
            console.log('res',data)
            setDocCount(data.length)
            setData(data)
          } catch (error) {
            console.log(error);      
          }
        }
      
        const handleSearch = async (e:any) => {
            e.preventDefault()
          try {
            setLoading(true)
            const {data:{data}} = await noteApi.post('/api/search',{query:search,category:category?.value})
            setLoading(false)
            console.log('res',data)
            setDocCount(data.length)
            setData(data)
          } catch (error) {
            console.log(error);      
          }
        }
    return (
      <>
       <div className="flex justify-between p-5">
        <div className="">
        <CategorySelect value={category} handleChange={handleSelect} />
        </div>
      <Search handleChange={handleChange}  handleSearch={handleSearch} />
      </div>
      {
        loading ? 
        <div className="flex justify-center items-center h-[80vh]">
        <Image alt="loading" src={dataLoader} /> 
        </div>
       : (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-3 p-7">
          {data.length > 0 &&
            data.map((x: any,i) => {
              return (
                <Cards key={i} title={x.title} content={x.content} category={x.category} _id={x._id} />
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