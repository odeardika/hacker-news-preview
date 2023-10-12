"use client"

import { useEffect, useState } from "react"
import CardPreview from "../components/CardPreview"
import { getHackerNewsStory } from "@/lib/getHackerNewsStory"
import Article from "@/components/Article"


type articleData = {
  id: number
  title: string
  url: string
  score: number
  author: string
  image: string
  desc : string

}

type urlData = {
  image: string
  desc : string
  author : string
}

export default function Home() {
  
  
  // requaest data from database
  const [listStory , setListStory] = useState<articleData[]>([])
  const [listAllArticle , setListAllArticle] = useState<articleData[]>([])

  useEffect(() => {
    // getHackerNewsStory()
    fetch(`/api/request?all=false`)
    .then(res => res.json())
    .then(data => {
      setListStory(data)
    })
    fetch(`/api/request?all=true`)
    .then(res => res.json())
    .then(data => {
      setListAllArticle(data)
    })
  }
  ,[])

  
  return (
    <>
      Hacker News Story
      <div className="flex flex-row flex-grow overflow-auto max-h-[500px] snap-center">
          {listStory.map((story) => (<div className="" key={story.id}>< CardPreview story={story}/></div>))}
      </div>
      
      <div className="grid-rows-2 mt-16">
        {listAllArticle.map((story) => (
        <div className="" key={story.id}>
          <Article article={story}/>
          </div>))}
      </div>
      
    </>
  )
}
