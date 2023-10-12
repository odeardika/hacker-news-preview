import prisma from "../../../../server/db/client";
import { NextRequest, NextResponse } from "next/server";

type data = {
    url : string
}

export async function GET(req : NextRequest){
    const {searchParams} = new URL(req.url)
    const all = searchParams.get('all')
    if(all === 'true'){
        const allArticles = await prisma.article.findMany(
            {
                orderBy: {
                    createAt: 'desc'
                }
            }
        )
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

// return API key from .env.local
export async function POST(req : NextRequest){
    const data : data = await req.json()
    const {url} = data
    const api = process.env.LINK_PREVIEW_KEY
    const username = process.env.USERNAME_LINK_PREVIEW

    // get story data from url
    const getStoryData = (await fetch(`https://v1.nocodeapi.com/${username}/link_preview/${api}?url=${url}`))
    const storyData = await getStoryData.json()
    const {description, image, author} = storyData
    
    return NextResponse.json({
        description: description,
        image: image,
        author: author
    })
}

