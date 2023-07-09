import { Typography } from "@mui/material"

export function MuiTypography() {
  return (
    <div className="m-10 max-w-3xl rounded border p-10">
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4">h4 heading</Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      {/* Default variant: body1 */}
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
        corrupti facere maiores omnis reiciendis, voluptates cupiditate
        repellendus porro tenetur debitis quia, quae commodi unde voluptatibus
        officiis quidem modi necessitatibus in!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
        corrupti facere maiores omnis reiciendis, voluptates cupiditate
        repellendus porro tenetur debitis quia, quae commodi unde voluptatibus
        officiis quidem modi necessitatibus in!
      </Typography>
    </div>
  )
}

export default MuiTypography
