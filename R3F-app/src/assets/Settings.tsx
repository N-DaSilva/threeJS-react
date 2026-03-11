import type { Dispatch, SetStateAction } from "react";

export default function Settings ({setBGvolume}:{setBGvolume:Dispatch<SetStateAction<number>>}) {
    //form with volume slider controls for the background music

    return (
        <form>
            <label htmlFor="volume">Background music</label>
            <input id="volume" type="range" min={0} max={10} step={1} onChange={e => setBGvolume(Number(e.target.value))} />
        </form>
    )

}