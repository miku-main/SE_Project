import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../config/mongodb";
import User from "../../../models/userSchema";

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
