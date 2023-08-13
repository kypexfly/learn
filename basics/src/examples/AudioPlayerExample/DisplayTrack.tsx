import { AudioElementRef, ProgressBarRef } from "."
import { Track } from "./data/tracks"

export const DisplayTrack = ({
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
