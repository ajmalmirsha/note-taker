'use client'
import { useState } from "react";
import List from "./components/List";
import NavBar from "./components/NavBar";
import { noteApi } from "@/utils/apis";


export default function Home() {
  
  
  return (
   <>
   <NavBar  />
   <List />
   </>
  )
}
