import mongoose, {Schema,model} from "mongoose";

 const noteSchema = new Schema({
    title: String,
    content:String,
    category:{
        type : Schema.Types.ObjectId ,
        ref:'Category'
    }
},{timestamps:true, collection: 'categories'})

console.log(mongoose.models);

 const NoteSchema = mongoose.models.notes || model('notes',noteSchema)
export default  NoteSchema