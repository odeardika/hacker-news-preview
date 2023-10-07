"use client"

import { useEffect, useState } from "react"
import CardPreview from "../components/CardPreview"
import { getHackerNewsStory } from "@/lib/getHackerNewsStory"


type storyData = {
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
  const [listStory , setListStory] = useState<storyData[]>([])

  useEffect(() => {
    getHackerNewsStory()
    fetch(`/api/request?all=false`)
    .then(res => res.json())
    .then(data => {
      setListStory(data)
    })
  }
  ,[])
  
  return (
    <>
      Hacker News Story
      <div className="flex flex-row flex-grow  overflow-auto max-h-[500px] snap-center">
          {listStory.map((story) => (<div className="basis-1/5 hover:basis-1/2" key={story.id}>< CardPreview story={story}/></div>))}
      </div>
    </>
  )
}
