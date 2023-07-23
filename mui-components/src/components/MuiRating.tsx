import { useState } from "react"
import { Favorite, FavoriteBorder } from "@mui/icons-material"
import { Rating, Stack } from "@mui/material"

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null)
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue)
  }

  console.log({ value })

  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        //   Custom icons
        icon={<Favorite color="error" />}
        emptyIcon={<FavoriteBorder />}
        // show product rating only
        // readOnly

        // highlight selected rating only (ex. emojis)
        // highlightSelectedOnly
      />
    </Stack>
  )
}

export default MuiRating
