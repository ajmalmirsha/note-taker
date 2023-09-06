'use client'
import { useState } from "react";
import List from "./components/List";
import NavBar from "./components/NavBar";
import { noteApi } from "@/utils/apis";


export default function Home() {
  const [search,setSearch] = useState('')
  const [data,setData] = useState([])
  const handleChange = (e:any) => {
    try {
      setSearch(e.target.value)
    } catch (error) {
      console.log(error);      
    }
  }

  const handleSearch = async (e:any) => {
      e.preventDefault()
    try {
      const {data:{data}} = await noteApi.post('/api/search',{query:search})
      console.log('res',data)
      setData(data)
    } catch (error) {
      console.log(error);      
    }
  }
  return (
   <>
   <NavBar handleChange={handleChange}  handleSearch={handleSearch} />
   <List data={data} setData={setData} />
   </>
  )
}
