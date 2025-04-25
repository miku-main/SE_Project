import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "../../../../config/mongodb";
import PostLiked from "../../../models/postLikedSchema";
import mongoose from "mongoose";

export const GET = async (request: NextRequest) => {
  await connectMongoDB();
  const postsLiked = await PostLiked.find();
  return NextResponse.json({ postsLiked }, {status:200});
};

export const POST = async (request: NextRequest) => {
  const { owner, likedBy, postId } = await request.json();
  await connectMongoDB();
  await PostLiked.create({ owner, likedBy, postId });
  return NextResponse.json({ message: "Post like added", status: 201 });
};

export const DELETE = async (request: NextRequest) => {
  const { owner, likedBy, postId } = await request.json();

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
//   }

  await connectMongoDB();

  const deletedItem = await PostLiked.findOneAndDelete({
    "owner": owner,
    "likedBy": likedBy,
    "postId": String(postId)
  });

  if (!deletedItem) {
    return NextResponse.json({message:"Item not found"}, {status:404});
  }
  return NextResponse.json({ message: "Item deleted"}, {status:200});
};
