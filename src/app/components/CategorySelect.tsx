'use client'
import { noteApi } from '@/utils/apis'
import { useEffect, useState } from 'react'
import Select from 'react-select'
export default function CategorySelect ({handleChange,value}:{handleChange:any,value:any}) {
    const [options,setOptions] = useState([])
    useEffect(()=>{
        noteApi.get('/api/categories').then(({data:{options}})=>{
          console.log(options);
          setOptions(options)
      })
    },[])
    return (
    <Select className='w-64' onChange={handleChange} value={value} options={options} isClearable  placeholder={'Select category'} />
    )
}