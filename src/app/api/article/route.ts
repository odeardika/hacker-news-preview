import prisma from "../../../../server/db/client"
import { NextRequest, NextResponse } from "next/server"
import { URL } from "url"

type Article = {
    title: string
    url: string
    author: string
    score: number
}

export async function GET(req : NextRequest){
    const {searchParams} = new URL(req.url)
    const url = searchParams.get('url')
    if (url !== null){
        const article = await prisma.article.findUnique({
            where: {
                url: url
            }
        })
        if(article){
            return NextResponse.json({
                message: `url already exist for title ${article.title}`
            })
        }
        else{
            return NextResponse.json({
                message: `url not found`
            })
        }

    }
}

export async function POST(req : NextRequest){
    const data : Article = await req.json()
    const { title, url, author, score } = data

    // check if url already exist in table
    const checkUrl = await prisma.article.findUnique({
        where: {
            url: url
        }
    })
    if(checkUrl){
        return NextResponse.json({
            message: `url already exist for title ${title}`
        })}
    else{
    const article = await prisma.article.create({
        data: {
            title: title,
            url: url,
            author: author,
            score: score,
        },
    })  
    console.log(article)
    return NextResponse.json({
        title,url,author,score
    })
    }
}
