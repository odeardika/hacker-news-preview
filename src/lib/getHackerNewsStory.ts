export async function getHackerNewsStory() {
    const resultFecthStory : number[] = []
    const res : Response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')

    if(!res.ok){
        throw Error (' Failed to get Story')
    }

    const listStory : Promise<number[]> = res.json()
    const filterStory = await listStory.then( list => list.slice(0,11))
    

    return filterStory

}

