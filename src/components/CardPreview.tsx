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

type linkPreviewRespone = {
  title: string
  description: string
  image: string
  url : string
}


const CardPreview = ({story}  : props) => {
  
  return (
    <>
    <div>
      <a href={story.url} target='_blank' >
        <div className='border-solid border-4 w-80 h-auto m-5'>
          <div className='flex justify-center'>
            <img className='object-cover' src={story.image} width={200} height={200} alt='apple-touch-icon' />
          </div>
          <div className='border-solid border-t-4 px-2'>
            <h5 className='font-bold'>{story.title}</h5>
            <h5 >{story.url}</h5>
          </div>
          <div className='flex flex-wrap border-solid border-t-4 px-2'>
            <h6 className='w-1/2'>{`Author : ${story.author}`}</h6>
            <h6 className='w-1/2'>{`Score : ${story.score}`}</h6>
          </div>
        </div>
      </a>
    </div>
    </>
  )
}

export default CardPreview