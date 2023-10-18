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
        <div className='flex ml-16 my-5'>
          <div className='article-image w-1/4'>
            <div className="w-52 h-40 bg-cover bg-center rounded-lg" style={{backgroundImage: `url(${article.image})`}}></div>
          </div>
          <div className='article-detail w-3/4 pt-3 pl-2'>
            <h1 className=' font-bold text-lg'>{article.title}</h1>
            <div className='flex items-center'>
              <Image src={user} width={20} height={20} alt='user' />
              <p className='ml-2'>{article.author}</p>
            </div>
            <div className='flex items-center'>
              <Image src={star} width={20} height={20} alt='star' />
              <p className='ml-2'>{article.score}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  )
}

 