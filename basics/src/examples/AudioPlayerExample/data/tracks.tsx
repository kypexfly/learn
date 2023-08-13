import song1 from "/flying_track_tribe.mp3"
import song2 from "/mini_vandals_steamboat.mp3"

export type Track = (typeof tracks)[0]

export const tracks = [
  {
    author: "Track Tribe",
    title: "Flying",
    src: song1,
  },
  {
    author: "Mini Vandals",
    title: "Steamboat",
    src: song2,
  },
]
