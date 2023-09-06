interface SelectProps {
    handleChange: (selectedOption: optionType | null) => void,
    value: {
        label: string,
        value: string
    }
}

type optionType = {
    label : string,
    value: string
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
    category:String,
    _id:String,
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