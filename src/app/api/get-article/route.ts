import { getHackerNewsStory } from "@/lib/getHackerNewsStory";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
    try{
        getHackerNewsStory()
        return NextResponse.json({
            message: `get article success`
        })
    }catch(err){
        return NextResponse.json({
            message: `error: ${err}`
        })
    }
}