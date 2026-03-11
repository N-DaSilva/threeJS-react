import { useRef, useEffect } from "react"


export default function BackgroundMusic ({bgVolume}:{bgVolume:number}) {

    //using ref to access HTML audio element properties
    const audioRef = useRef<HTMLAudioElement>(null);

    //set background volume before playing once HTML audio element is loaded
    useEffect(() => {
        if(audioRef.current){
        audioRef.current.volume = bgVolume/10;
        audioRef.current.play();
    }
    }, [audioRef.current, bgVolume]);

    return (
        <audio ref={audioRef} loop src="/src/assets/sounds/background-music.mp3"></audio>
    )
}