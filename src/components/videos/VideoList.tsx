import VideoItem from "./VideoItem"

export default function VideoList({videos}:{videos:any}){
  return (
    <div className="grid grid-cols-5 gap-8">
            {/* map untuk looping dalam pemrosesan */}
        {videos.items.map((video:any) => 
        {
            return <div key={video.id.videoId}>
                    <VideoItem video={video}/>  
                </div>
        }
        )}
    </div>
    )
}