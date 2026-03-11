import { useRef, useEffect } from "react"


export default function BackgroundMusic ({bgVolume}:{bgVolume:number}) {

    //using ref to access HTML audio element properties
    const audioRef = useRef<HTMLAudioElement>(null);

    //used a useEffect hook to set background volume before playing once HTML audio element is loaded, and change whenever bgVolume variable is modified
    useEffect(() => {
        if(audioRef.current){
        audioRef.current.volume = bgVolume/10;
        audioRef.current.play();
    }
    }, [audioRef.current, bgVolume]);

    //return HTML audio element because it's not needed in the 3D scene + makes volume control more easily accessible
    return (
        <audio ref={audioRef} loop src="/src/assets/sounds/background-music.mp3"></audio>
    )
}