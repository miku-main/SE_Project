import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../../config/mongodb";
import User from "../../../../models/userSchema";
import Post from "../../../../models/postSchema";

export const GET = async (
  request: NextRequest,
  { params }: { params: { username: string } }
) => {
  await connectMongoDB();
  const { username } = params;

  try {
    const user = await User.findOne({ username }).populate("bookmarks");
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json({ bookmarks: user.bookmarks }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching bookmarks" }, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  const { username, postId } = await req.json();
  await connectMongoDB();

  try {
    const user = await User.findOne({ username });
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    if (!user.bookmarks.includes(postId)) {
      user.bookmarks.push(postId);
      await user.save();
    }

    return NextResponse.json({ message: "Post bookmarked!" });
  } catch (error) {
    return NextResponse.json({ error: "Error bookmarking post" }, { status: 500 });
  }
};

export const DELETE = async (req: NextRequest) => {
  const { username, postId } = await req.json();
  await connectMongoDB();

  try {
    const user = await User.findOne({ username });
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    user.bookmarks = user.bookmarks.filter(id => id.toString() !== postId);
    await user.save();

    return NextResponse.json({ message: "Post removed from bookmarks!" });
  } catch (error) {
    return NextResponse.json({ error: "Error removing bookmark" }, { status: 500 });
  }
};

