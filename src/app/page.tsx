"use client"

import { getHackerNewsStory } from "../lib/getHackerNewsStory"
import { useEffect, useState } from "react"


export default function Home() {
  
  const [listStoryId , setlistStoryId] = useState<number[]>([])
  useEffect(()=>{
    getHackerNewsStory()
    
  })
  // const listStory = [
  //   {id: 17, title: 'iPhone 15 teardown reveals software lockdown',url: 'https://www.ifixit.com/News/82867/iphone-15-teardown-reveals-software-lockdown',author: 'dh-g', score : 100},
  //   {id: 17, title: 'iPhone 15 teardown reveals software lockdown',url: 'https://www.ifixit.com/News/82867/iphone-15-teardown-reveals-software-lockdown',author: 'dh-g', score : 100},
  //   {id: 17, title: 'iPhone 15 teardown reveals software lockdown',url: 'https://www.ifixit.com/News/82867/iphone-15-teardown-reveals-software-lockdown',author: 'dh-g', score : 100},
  //   {id: 17, title: 'iPhone 15 teardown reveals software lockdown',url: 'https://www.ifixit.com/News/82867/iphone-15-teardown-reveals-software-lockdown',author: 'dh-g', score : 100},
  //   {id: 17, title: 'iPhone 15 teardown reveals software lockdown',url: 'https://www.ifixit.com/News/82867/iphone-15-teardown-reveals-software-lockdown',author: 'dh-g', score : 100},
  // ]
  // requaest data from request api
  const [listStory , setListStory] = useState<any[]>([])
  useEffect(() => {
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
      {/* Today Story */}
      {/* All Story */}
      <ul>
        {listStory.map((story) => (<li key={story.id}>{`${story.title} | URL : ${story.url}`}</li>))}
      </ul>
    </>
  )
}
