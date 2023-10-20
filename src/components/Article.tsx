import React from 'react'
import star from '../../public/star.svg'
import user from '../../public/user.svg'
import Image from 'next/image'


type articleData = {
  id: number
  title: string
  url: string
  score: number
  author: string
  image: string
  desc : string

}
type props = {
  article: articleData
}

export default function Article({article} : props) {
  return (
    <>
      <a href={article.url} target='_blank'>
        <div className='flex ml-5 lg:ml-16 my-5'>
          <div className='article-image w-2/4 lg:w-1/4'>
            <div className="w-36 h-16 lg:w-52 lg:h-32 bg-cover bg-center rounded-lg" style={{backgroundImage: `url(${article.image})`}}></div>
          </div>
          <div className='article-detail w-2/4 lg:w-3/4 lg:pt-3 lg:pl-2'>
            <h1 className=' font-semibold text-xxs lg:text-xl '>{article.title}</h1>
            <div className='flex items-center'>
              <Image src={user} className=' w-3 lg:w-5' alt='user' />
              <p className='ml-2 text-xxs lg:text-xl'>{article.author}</p>
            </div>
            <div className='flex items-center'>
              <Image src={star} className=' w-3 lg:w-5' alt='star' />
              <p className='ml-2 text-xxs lg:text-xl'>{article.score}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  )
}

 