import mongoose, {Schema,model} from "mongoose";

 const noteSchema = new Schema({
    title: String,
    content:String,
    category:{
        type : Schema.Types.ObjectId ,
        ref:'Category'
    }
},{timestamps:true})

const noteModel = mongoose.models.notes || model('notes',noteSchema)

export default noteModel
