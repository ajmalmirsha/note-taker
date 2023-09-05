interface SelectProps {
    handleChange: (selectedOption: optionType | null) => void;
}

type optionType = {
    label : string,
    value: string
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