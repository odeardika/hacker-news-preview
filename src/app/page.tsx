"use client"

import { useEffect, useState } from "react"
import CardPreview from "../components/CardPreview"
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
  let tempStory : articleData = {
    id: 0,
    title: '',
    url: '',
    score: 0,
    author: '',
    image: '',
    desc : ''
  }
  const [tempArticle , setTempArticle] = useState(tempStory)

  useEffect(() => {
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
      <div className="flex flex-row flex-grow overflow-auto h-auto snap-center">
          {listStory.map((story) => (<div className="" key={`show-${story.id}`}>< CardPreview story={story}/></div>))}
      </div>
      {listAllArticle && listAllArticle.map((story, index) => {
        if (index % 2 === 0 && listAllArticle.length > index + 1) {
          return (
            <div className="flex">
              <div className="w-1/2">
                <div key={story.id}><Article article={story} /></div>
              </div>
              <div className="w-1/2">
                <div key={listAllArticle[index + 1].id}><Article article={listAllArticle[index + 1]} /></div>
              </div>
            </div>
          )
        }
          return (
            <></>
          )
        }
      )}
    </>
  )
}
