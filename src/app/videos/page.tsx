
import { SearchInput } from "@/components/SearchInput";
import VideoList from "@/components/videos/VideoList";
import { apiKey } from "@/Constant";

async function fetchVideos (query:string) {
    let url = new URL (`https://www.googleapis.com/youtube/v3/search?q=${query}&key=${apiKey}`)

    url.searchParams.set('maxResult','20')
    url.searchParams.set('part','snippet')
    url.searchParams.set('type','video')


    try {
        const videos  = await fetch(url)
        return videos.json()
    } catch (error) {
        console.error(error)
    }
}

export default async function Videos ({ 
        searchParams, 
    }:{ searchParams: {
        [key: string]: string };
}){
    // Cek params
    // return <div>Video Page {searchParams.query}</div>

    const videos = await fetchVideos(searchParams.query)
    console.log(videos)

    return <div>
        <div className="w-[50%]">
            <SearchInput />
        </div>
        <div className="mt-8">
            {/* Video List */}
            <VideoList videos={videos}/>
        </div>
    </div>
}