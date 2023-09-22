import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
const prisma = new PrismaClient()

type Article = {
    title: string
    url: string
    author: string
    score: number
}


export async function POST(req : NextRequest){
    const data : Article = await req.json()
    const { title, url, author, score } = data
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
