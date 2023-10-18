import Image from 'next/image'
import star from '../../public/star.svg'
import user from '../../public/user.svg'

type storyData = {
  id: number
  title: string
  url: string
  score: number
  author: string
  image: string
  desc : string

}
type props = {
  story: storyData
}




const CardPreview = ({story}  : props) => {
  
  return (
    <>
    <div>
      <a href={story.url} target='_blank' >
        <div className=" h-96">
          <div className="w-96 h-44 m-8 bg-cover bg-center rounded-lg" style={{backgroundImage: `url(${story.image})`}}></div>
          <div className=" px-12">
            <h2 className="font-bold">{story.title}</h2>
            <h2>{story.url}</h2>
            <div className='flex items-center'>
              <Image src={user} width={20} height={20} alt='user' />
              <p className='ml-2'>{story.author}</p>
            </div>
            <div className='flex items-center'>
              <Image src={star} width={20} height={20} alt='star' />
              <p className='ml-2'>{story.score}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
    </>
  )
}
export default CardPreview