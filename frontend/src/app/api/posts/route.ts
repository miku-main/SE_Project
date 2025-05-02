import { NextRequest, NextResponse } from "next/server";
import {connectMongoDB}  from "../../../../config/mongodb";
import Post from "../../../models/postSchema";


export const GET = async (request: NextRequest) => {
    await connectMongoDB();
    const posts = await Post.find();
    return NextResponse.json({posts});
}

export const POST = async (request: NextRequest) => {
    const {username, description,image, title, country} = await request.json();
    await connectMongoDB();
    await Post.create({username,description,image,title,likes:0,country})
    return NextResponse.json({message:"Post added", status:201})
}