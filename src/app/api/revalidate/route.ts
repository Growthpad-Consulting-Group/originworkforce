import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }

    if (!body?._type) {
      return NextResponse.json({ message: "Missing _type in payload" }, { status: 400 });
    }

    revalidateTag("post", "max");

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    console.error("Sanity revalidation webhook failed:", error);
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
