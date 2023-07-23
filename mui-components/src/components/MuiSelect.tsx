import { useState } from "react"
import { Box, MenuItem, Stack, TextField } from "@mui/material"

const MuiSelect = () => {
  const [country, setCountry] = useState<string>("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value)
  }

  const [countries, setCountries] = useState<string[]>([])
  const handleCountriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCountries(typeof value === "string" ? value.split(",") : value)
  }

  return (
    <Stack spacing={4}>
      <Box width="250px">
        <TextField label="Select a country" select value={country} onChange={handleChange} fullWidth>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="EC">Ecuador</MenuItem>
        </TextField>
      </Box>

      <Box width="250px">
        <TextField
          label="Select a country"
          select
          value={countries}
          onChange={handleCountriesChange}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
          size="small"
          color="secondary"
          helperText="You can select multiple countries"
          error
        >
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="EC">Ecuador</MenuItem>
        </TextField>
      </Box>
    </Stack>
  )
}

export default MuiSelect
