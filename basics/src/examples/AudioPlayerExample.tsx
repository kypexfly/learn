import { useCallback, useEffect, useRef, useState } from "react"
import song1 from "/flying_track_tribe.mp3"

type Track = (typeof tracks)[0]

const tracks = [
  {
    author: "Track Tribe",
    title: "Flying",
    src: song1,
  },
]

const formatTime = (time: number) => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60)
    const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const seconds = Math.floor(time % 60)
    const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${formatMinutes}:${formatSeconds}`
  }
  return "00:00"
}

type AudioElementRef = React.RefObject<HTMLAudioElement>

const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
}: {
  currentTrack: Track
  audioRef: AudioElementRef
  setDuration: React.Dispatch<React.SetStateAction<number>>
  progressBarRef: ProgressBarRef
}) => {
  const onLoadedMetadata = () => {
    if (!audioRef.current || !progressBarRef.current) return
    const seconds = audioRef.current.duration
    setDuration(seconds)
    progressBarRef.current.max = seconds.toString()
  }

  return (
    <div>
      <audio className="hidden" ref={audioRef} src={currentTrack.src} onLoadedMetadata={onLoadedMetadata} controls />
      <div>{`${currentTrack.author} - ${currentTrack.title}`}</div>
    </div>
  )
}

interface Button extends React.HTMLAttributes<HTMLButtonElement> {}
const Button = (props: Button) => {
  return <button className="rounded-md bg-blue-600 px-4 py-2 font-bold text-white" {...props} />
}
{
  /* <Controls audioRef={audioRef} progressBarRef={progressBarRef} duration={duration} setTimeProgress={setTimeProgress} /> */
}

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
}: {
  audioRef: AudioElementRef
  progressBarRef: ProgressBarRef
  duration: number
  setTimeProgress: React.Dispatch<React.SetStateAction<number>>
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const playAnimationRef = useRef<FrameRequestCallback>(null)

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime
    setTimeProgress(currentTime)
    progressBarRef.current.value = currentTime
    
    playAnimationRef.current = requestAnimationFrame(repeat)
  }, [])

  useEffect(() => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.play()
      playAnimationRef.current = requestAnimationFrame(repeat)
    } else {
      audioRef.current.pause()
      cancelAnimationFrame(playAnimationRef.current)
    }
  }, [isPlaying, audioRef, repeat])

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  return (
    <div className="flex gap-3">
      <Button>First</Button>
      <Button>Prev</Button>

      <Button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</Button>

      <Button>Next</Button>
      <Button>Last</Button>
    </div>
  )
}

type ProgressBarRef = React.RefObject<HTMLInputElement>
const ProgressBar = ({
  progressBarRef,
  audioRef,
  timeProgress,
  duration,
}: {
  progressBarRef: ProgressBarRef
  audioRef: AudioElementRef
  timeProgress: number
  duration: number
}) => {
  const handleProgressChange = () => {
    if (!progressBarRef.current || !audioRef.current) return
    console.log(progressBarRef.current)
    audioRef.current.currentTime = +progressBarRef.current.value
  }

  return (
    <div className="progress">
      <span className="time current">{formatTime(timeProgress)}</span>
      <input type="range" defaultValue={0} ref={progressBarRef} onChange={handleProgressChange} />
      <span className="time">{formatTime(duration)}</span>
    </div>
  )
}

const PlayerExample = () => {
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0])
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressBarRef = useRef<HTMLInputElement>(null)
  const [timeProgress, setTimeProgress] = useState(0)
  const [duration, setDuration] = useState(0)

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
