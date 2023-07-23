import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia component="img" height="100" image="https://source.unsplash.com/random" alt="unsplash image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Heading
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fuga libero sed animi maxime suscipit
            aliquam, rerum adipisci fugiat minima earum consequatur, veritatis tempore repellendus unde deleniti et illo
            magni?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default MuiCard
