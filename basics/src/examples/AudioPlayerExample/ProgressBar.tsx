import { AudioElementRef, ProgressBarRef } from "."
import formatTime from "./utils/formatTime"

export const ProgressBar = ({
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
