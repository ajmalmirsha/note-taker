'use client'

import { noteApi } from '@/utils/apis';
import { useLayoutEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
// let options:optionType[] = [];

export default function Select ({handleChange,value}:SelectProps) {
    const [options,setOptions] = useState([])
    useLayoutEffect(()=>{
        noteApi.get('/api/categories').then(({data:{options}})=>{
            console.log(options);
            setOptions(options)
        })
    },[])
    return (
        <CreatableSelect value={value} onChange={handleChange} className='w-64' isClearable options={options} />
    )
}