import axios from "axios"
// import createArticle from "../lib/createArticle"
// import cornJob from 'node-cron'

export async function getHackerNewsStory() {
    const storyIdsResponse : Response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')

    if(!storyIdsResponse.ok){
        throw Error (' Failed to get Story')
    }

    const listStoryIds : Promise<number[]> = storyIdsResponse.json()
    
    // selected today story
    const selectedStoryIds = await listStoryIds.then( list => list.slice(0,30))

    // filter story
    const filteredStories = selectedStoryIds.map( async (storyId) => {
        const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
        const story = await storyResponse.json()
        
        // check if story is an article about a programming or software related topic
        if(story && story.type === 'story' && story.title && story.title.toLowerCase().match(/(software|programming|linux|sql|npm|javascript|python|pip)/)) return await story
        else if(story && story.type === 'story' && story.url && story.url.toLowerCase().match(/(github)/)) return await story


    })
    // send filteredStories to database 
    filteredStories.forEach( async (story) => {
        const storyValue = await story
        if(storyValue){
            // send a post request to create article
            const data = await fetch('api/article', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: storyValue.title,
                    url: storyValue.url,
                    author : storyValue.by,
                    score : storyValue.score
                })
            })
            console.log(await data.json())
        }
    })
}



