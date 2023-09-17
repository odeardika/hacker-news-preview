"use client"
import { getHackerNewsStory } from "../lib/getHackerNewsStory"
import { SetStateAction, useEffect, useState } from "react"


export default function Home() {
  
  const [listStoryId , setlistStoryId] = useState<number[]>([])
  useEffect(()=>{
    getHackerNewsStory().then(listStory => {
      const tempData = [...listStory]
      setlistStoryId(tempData)
      console.log(listStoryId)
    })
  })
  
  return (
    <>
      Hacker News Story
      <ul>
        {listStoryId.map(a => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </>
  )
}
