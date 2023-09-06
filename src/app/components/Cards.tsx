'use client'
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux";
import { setNoteDetails } from "../../../redux/noteSlice";
export default function Cards ({title,content,category,_id}:cardsType) {
  const router = useRouter()
  // const dispatch = useDispatch()
 console.log(title,content,category,_id);
 
  const handleClick = () => {
    router.push('/addNote/' + _id)
      // dispatch(
      //   setNoteDetails({
      //     title,
      //     content,
      //     category,
      //     _id
      //   })
      // )
  }
    return (
        <div onClick={handleClick} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    {/* <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'} alt="Modern building architecture" />
    </div> */}
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{category?.label}</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</a>
      <p className="mt-2 text-slate-500 w-[354px] h-[90px] overflow-hidden line-clamp-3">{content}</p>
    </div>
  </div>
</div>
    )
}