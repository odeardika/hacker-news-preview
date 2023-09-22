"use client"

import { getHackerNewsStory } from "../lib/getHackerNewsStory"
import { useEffect, useState } from "react"


export default function Home() {
  
  const [listStoryId , setlistStoryId] = useState<number[]>([])
  useEffect(()=>{
    getHackerNewsStory()
    
  })

  
  return (
    <>
      Hacker News Story
      <ul>
        
      </ul>
    </>
  )
}
