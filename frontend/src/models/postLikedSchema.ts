import mongoose, { Model, Schema } from "mongoose";

interface IPostLiked extends Document {
    owner:string;
    likedBy:string;
    postId:number;
}

const postLikedSchema = new Schema<IPostLiked>({
    owner:{
        type:String,
        required:true
    },
    likedBy:{
        type:String,
        required:true
    },
    postId:{
        type:Number,
        required:true
    }
});

const PostLiked:Model<IPostLiked> = mongoose.models.PostLiked || mongoose.model<IPostLiked>("PostLiked", postLikedSchema);
export default PostLiked;