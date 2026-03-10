import { useRef } from "react"


export function BackgroundMusic () {

    const audioRef = useRef<HTMLAudioElement>(null);

    if(audioRef.current){
        console.log(audioRef.current.volume);
        audioRef.current.volume = 0.1;
    }

    return (
        <audio ref={audioRef} autoPlay loop src="/src/assets/background-music.mp3"></audio>
    )
}