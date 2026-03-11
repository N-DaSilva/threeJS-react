import type { Dispatch, SetStateAction } from "react";

export default function Settings ({setBGvolume}:{setBGvolume:Dispatch<SetStateAction<number>>}) {

    return (
        <form>
            <label>Musique de fond</label>
            <input type="range" min={0} max={10} step={1} onChange={e => setBGvolume(Number(e.target.value))} />
        </form>
    )

}