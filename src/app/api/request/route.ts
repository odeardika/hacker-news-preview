import prisma from "../../../../server/db/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest){
    const {searchParams} = new URL(req.url)
    const all = searchParams.get('all')
    if(all === 'true'){
        const allArticles = await prisma.article.findMany()
        return NextResponse.json(allArticles)
    }
    // get 10 newest articles
    else if(all === 'false'){
        const newestArticles = await prisma.article.findMany({
            orderBy: {
                createAt: 'desc'
            },
            take: 10
        })
        return NextResponse.json(newestArticles)
    }

}