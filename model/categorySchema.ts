
import mongoose, { Schema, model } from "mongoose";

const categorySchema = new Schema({
    label: String,
    value: String
},{timestamps:true})

console.log("modelsss",mongoose.models);


const CategoryModel = mongoose.models?.Category || model('Category',categorySchema)

export default CategoryModel