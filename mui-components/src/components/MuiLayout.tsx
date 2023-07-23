import { Box, Divider, Grid, Paper, Stack } from "@mui/material"

const MuiLayout = () => {
  return (
    // Paper adds shadow and rounded corners, used for semantics
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {/*Stack: ;ayout for 1D -> horizontal or vertical */}

        <Box
          component="main"
          sx={{
            bgcolor: "primary.main",
            color: "white",
            width: "100px",
            height: "100px",
            padding: "10px",
            "&:hover": {
              backgroundColor: "primary.light",
              cursor: "pointer",
            },
          }}
        ></Box>
        <Box display="flex" height="100px" width="100px" bgcolor="success.light" p={2}></Box>
      </Stack>

      <Grid container my={4} spacing={2}>
        <Grid item xs>
          <Box bgcolor="primary.light" p={2}>
            Item
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box bgcolor="primary.light" p={2}>
            Item
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="primary.light" p={2}>
            Item
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="primary.light" p={2}>
            Item
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="primary.light" p={2}>
            Item
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="primary.light" p={2}>
            Item
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default MuiLayout
