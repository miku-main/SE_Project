import mongoose, { Model, Schema } from "mongoose";

interface IItem extends Document {
    username:string;
    likes:number;
    description:string;
    title:string;
    followed:boolean;
    ingredients:Array<string>;
    steps:Array<string>;
}

const postSchema = new Schema<IItem>({
    username:{
        type:String,
        required:true
    },
    likes:{
        type:Number,
        required:true
    },
    description:{
        type:String
    },
    title:{
        type:String,
        required:true
    },
    followed:{
        type:Boolean,
        required:true
    },
    ingredients: {
        type:[String],
        required:false
    },
    steps:{
        type:[String],
        required:false
    }

})