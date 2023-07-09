import { useState } from "react"
import { InputAdornment, Stack, TextField } from "@mui/material"

const MuiTextField = () => {
  const [value, setValue] = useState<string>("")

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="standard" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="outlined" />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField label="Name" size="small" color="warning" variant="standard" required />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField label="Required" required />
        <TextField label="Disabled" disabled />
        <TextField
          label="Password"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Don't share your password"}
        />
        {/* <TextField label="Password" type="password" required helperText="Don't share your password with anyone" /> */}
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
        />
        <TextField label="Weight" InputProps={{ endAdornment: <InputAdornment position="start">Kg</InputAdornment> }} />
      </Stack>
    </Stack>
  )
}

export default MuiTextField
