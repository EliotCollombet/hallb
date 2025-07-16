import videoData from '@/public/videos.json';

export default function VideoBackground() {
    const video = videoData.find(v => v.title === "Vidéo de présentation");
    if (video === undefined) {
        console.log("Aucune vidéo de présentation")
        return;
    }

    return <video src={video.path} autoPlay playsInline muted loop preload="auto" className="absolute min-w-full min-h-full object-cover w-auto h-auto"/>;
}