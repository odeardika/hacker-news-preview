import { getHackerNewsStory } from "@/lib/getHackerNewsStory";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
    try{
        const data = await getHackerNewsStory().then((data) => {
            return data
        })
        return NextResponse.json({
            message: data
        })
    }catch(err){
        return NextResponse.json({
            message: `error: ${err}`
        })
    }
}