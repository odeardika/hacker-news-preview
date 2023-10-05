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
      <ul>
        {listStory.map((story) => (<li key={story.id}>< CardPreview story={story}/></li>))}
      </ul>
    </>
  )
}
