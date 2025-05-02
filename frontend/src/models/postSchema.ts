import mongoose, { Model, Schema } from "mongoose";

interface IPost extends Document {
    username:string;
    likes:number;
    description:string;
    image:string;
    title:string;
    ingredients:Array<string>;
    steps:Array<string>;
    country:string;
}

const postSchema = new Schema<IPost>({
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
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    ingredients: {
        type:[String],
        required:true
    },
    steps:{
        type:[String],
        required:true
    },
    country:{
        type:String,
        required:true
    }
});

const Post:Model<IPost> = mongoose.models.Post || mongoose.model<IPost>("Post", postSchema);
export default Post;