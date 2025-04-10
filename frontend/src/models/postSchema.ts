import mongoose, { Model, Schema } from "mongoose";

interface IPost extends Document {
    username:string;
    likes:number;
    description:string;
    title:string;
    ingredients:Array<string>;
    steps:Array<string>;
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
    title:{
        type:String,
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
});

const Post:Model<IPost> = mongoose.models.Post || mongoose.model<IPost>("Post", postSchema);
export default Post;