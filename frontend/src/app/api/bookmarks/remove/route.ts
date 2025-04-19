import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../config/mongodb";
import User from "../../../models/userSchema";

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
