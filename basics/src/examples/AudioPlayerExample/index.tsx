import { useRef, useState } from "react"
import { Controls } from "./Controls"
import { tracks, type Track } from "./data/tracks"
import { DisplayTrack } from "./DisplayTrack"
import { ProgressBar } from "./ProgressBar"

export type AudioElementRef = React.RefObject<HTMLAudioElement>
export type ProgressBarRef = React.RefObject<HTMLInputElement>

const PlayerExample = () => {
  const [trackIndex, setTrackIndex] = useState(0)
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[trackIndex])
  const [timeProgress, setTimeProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  const audioRef = useRef<HTMLAudioElement>(null)
  const progressBarRef = useRef<HTMLInputElement>(null)

  return (
    <div className="flex justify-center border bg-zinc-100">
      <div className="border bg-white p-6">
        <DisplayTrack
          currentTrack={currentTrack}
          audioRef={audioRef}
          setDuration={setDuration}
          progressBarRef={progressBarRef}
        />

        <Controls
          audioRef={audioRef}
          progressBarRef={progressBarRef}
          duration={duration}
          setTimeProgress={setTimeProgress}
          tracks={tracks}
          trackIndex={trackIndex}
          setTrackIndex={setTrackIndex}
          setCurrentTrack={setCurrentTrack}
        />

        <ProgressBar
          progressBarRef={progressBarRef}
          audioRef={audioRef}
          timeProgress={timeProgress}
          duration={duration}
        />
      </div>
    </div>
  )
}

export default PlayerExample
