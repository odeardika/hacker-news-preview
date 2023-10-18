import axios from "axios";
import { get } from "http";

export async function getHackerNewsStory() {
  const storyIdsResponse: Response = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  );

  if (!storyIdsResponse.ok) {
    throw Error(" Failed to get Story");
  }

  const listStoryIds: Promise<number[]> = storyIdsResponse.json();

  // selected today story
  const selectedStoryIds = await listStoryIds.then((list) => list.slice(0, 100));

  // filter story
  const filteredStories = selectedStoryIds.map(async (storyId) => {
    const storyResponse = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
    );
    const story = await storyResponse.json();

    // check if story is an article about a programming or software related topic
    if (story.url) {
      if(story.type === 'story'){
        if(story.url.toLowerCase().match(/(github)/) || story.title.toLowerCase().match(/(software|programming|linux|sql|npm|script|python|pip|open source|open-source|query|db|html)/)){
          return await story
        }
      }
    }
  });

  // send filteredStories to database
  const stories = filteredStories.map(async (story) => {
    const storyValue = await story;

    if (storyValue) {
      
      // send only stories that are not already in database
      const checkUrl = await axios.get(`api/article?url=${storyValue.url}`)

      if (checkUrl.data.message !== "url not found") {
        return checkUrl.data.message;
      
      } else {
        // get story data image from url
        const getStoryData = (
          await axios.post('/api/request', {
            url: storyValue.url,
          })
        ).data

        // send all filtered stories to database
        if(getStoryData.image !== undefined && getStoryData.image !== null){
        return await axios.post(`api/article?`, {
          title: storyValue.title,
          url: storyValue.url,
          author: getStoryData.author? getStoryData.author : storyValue.by,
          score: storyValue.score,
          image: getStoryData.image,
          description: getStoryData.description? getStoryData.description : storyValue.title,
        })
      }

      }
    }
  });
}
