interface SelectProps {
    handleChange: (selectedOption: optionType | null ) => void,
    value: {
        label: string,
        value: string
    }
}

type optionType = {
    label : string,
    value: string
}

type ListPropsType = {
    data:any,
    setData:any
}

interface PaginationProps {
     onPageChange: (event: PaginationEvent) => void | null;
      first: number;
      rows: number;
      count: number;
}


interface NoteState {
    id: string;
    title: string;
    content: string;
    category: string;
  }

type cardsType = {
    title:String,
    content:String,
    category:{
        label: string,
        value:string
    },
    _id:String,
}

type PaginationEvent = {
    first : number,
    rows:number  ,
}

type configType = {
    headers : {
        "Content-Type" : string
    },
    withCredentials : boolean
}

type cataType = {
    _id : String,
    label: String,
    value: String,
    createdAt: String,
    updatedAt: String
}