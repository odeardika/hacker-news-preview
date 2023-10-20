import { getHackerNewsStory } from "@/lib/getHackerNewsStory";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
    return getHackerNewsStory()
}