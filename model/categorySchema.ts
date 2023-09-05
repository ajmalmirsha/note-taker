
import mongoose, { Schema, model } from "mongoose";

const categorySchema = new Schema({
    label: String,
    value: String
},{timestamps:true})

console.log("modelsss",mongoose.models);


export default mongoose.models?.Category || model('Category',categorySchema)