"use client";
/* eslint-disable */
import { noteApi } from "@/utils/apis";
import { useEffect, useLayoutEffect, useState } from "react";
import Select from "../components/Items";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast/headless";

export default function AddNote({_id}:any) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<optionType>();
  const [docId, setDocId] = useState(null);
  const [autoSave, setAutoSave] = useState<boolean>(false);
  const router = useRouter()
  useLayoutEffect(()=>{
    if(_id){
      noteApi.get('/api/getNotes/'+_id).then(({data:{data}})=>{
          setContent(data.content)
          setTitle(data.title)
          setDocId(data._id)
          setCategory({label:data.category.label,value:data.category._id})
      })
    }
  },[_id])
  const handleSave = async (e:any) => {
    e.preventDefault()
    try {
      if (!title) {
        alert('Please enter title');
      return false
      }

      if (!category?.value) {
        alert('Please select category')
        return false
      }

      const config: configType = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      const obj = { title, content, category };

      const { data } = await noteApi.post("/api/addNote", obj, config);

      setDocId(data._id);
      return true
    } catch (err) {
      console.log(err);
      return false
    }
  };

  useEffect(() => {
    if (title && docId && category?.value) {
      let timeOut: any;
      clearTimeout(timeOut);
      timeOut = setTimeout(async () => {
        const config: configType = {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        };
        const obj = { content, _id: docId };

        const res = await noteApi.put("/api/addNote", obj, config);
      }, 250);
      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [content,title,docId,category?.value]);

  const handleChange = (option: optionType) => {
    setCategory(option);
    return;
  };
  return (
    <>
      <div className="add-note p-4 m-4 flex flex-col space-y-4">
        <div className="btn-wrapper flex justify-between">
          <Select value={category?.value} handleChange={handleChange} />
          <div className="">
            <input
              className=" mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              value={autoSave}
              disabled={!title || !category?.value ? true : false}
              onChange={async(e) => {
                if (e.target.checked) {
                 const res = await handleSave(e);
                if(res){
                  e.target.checked = true
                }
                }
                setAutoSave(e.target.checked);
              }}
              id="flexSwitchCheckDefault"
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="flexSwitchCheckDefault"
            >
              Auto save
            </label>
          </div>
          <button
            onClick={async(e)=>{
             const res:boolean = await handleSave(e)
             if(res){
               router.push('/')
             }
            }}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
          >
            save
          </button>
          <button
            disabled
            type="button"
            className=" hidden py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#1C64F2"
              />
            </svg>
            Loading...
          </button>
        </div>

        <div className="input-wrapper border border-black rounded-md">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="title"
            className="rounded-md p-2 w-full border-none"
          />
        </div>
        <div className="content-wrapper w-full">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name=""
            id=""
            cols={100}
            rows={10}
            className="border border-black p-2 w-full"
          ></textarea>
        </div>
      </div>
      
    </>
  );
}
