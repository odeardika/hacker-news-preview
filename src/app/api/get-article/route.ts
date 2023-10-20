import { getHackerNewsStory } from "@/lib/getHackerNewsStory";

export async function GET(req: Request, res: Response) {
    getHackerNewsStory()
}