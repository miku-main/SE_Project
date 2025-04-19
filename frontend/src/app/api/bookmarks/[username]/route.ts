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
