import { useCallback, useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/Button"
import { AudioElementRef, ProgressBarRef } from "."
import { Track } from "./data/tracks"

export const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
}: {
  audioRef: AudioElementRef
  progressBarRef: ProgressBarRef
  duration: number
  setTimeProgress: React.Dispatch<React.SetStateAction<number>>
  tracks: Track[]
  trackIndex: number
  setTrackIndex: React.Dispatch<React.SetStateAction<number>>
  setCurrentTrack: React.Dispatch<React.SetStateAction<Track>>
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(60)
  const playAnimationRef = useRef<FrameRequestCallback>(null)

  const repeat = useCallback(() => {
    const currentTime = audioRef.current!.currentTime
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

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100
    }
  }, [volume, audioRef])

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  const skipForward = () => {
    audioRef.current.currentTime += 15
  }

  const skipBackward = () => {
    audioRef.current.currentTime -= 15
  }

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1
      setTrackIndex(lastTrackIndex)
      setCurrentTrack(tracks[lastTrackIndex])
    } else {
      setTrackIndex((prev) => prev - 1)
      setCurrentTrack(tracks[trackIndex - 1])
    }
  }

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0)
      setCurrentTrack(tracks[0])
    } else {
      setTrackIndex((prev) => prev + 1)
      setCurrentTrack(tracks[trackIndex + 1])
    }
  }

  return (
    <>
      <div className="flex gap-3">
        <Button onClick={handlePrevious}>Prev</Button>
        <Button onClick={skipBackward}>Skip Backward</Button>

        <Button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</Button>

        <Button onClick={skipForward}>Skip Forward</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
      <div className="volume">
        <button>Volume</button>
        <input type="range" min={0} max={100} value={volume} onChange={(e) => setVolume(+e.target.value)} />
      </div>
    </>
  )
}
