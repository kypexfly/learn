import { Button, ButtonGroup, IconButton, ToggleButton, ToggleButtonGroup, Stack } from "@mui/material"
import { Send, FormatBold, FormatItalic, FormatUnderlined } from "@mui/icons-material"
import { useState } from "react"

export function MuiButton() {
  const [formats, setFormats] = useState<string[]>([])
  const [formatsExclusive, setFormatsExclusive] = useState<string[]>([])

  const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    console.log(newFormats)
    setFormats(newFormats)
  }
  const handleFormatExclusiveChange = (_event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    console.log(newFormats)
    setFormatsExclusive(newFormats)
  }

  return (
    <div className="m-10 max-w-3xl rounded border p-10">
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary" disableElevation 
            disableRipple onClick={() => alert('Hi')}>
              Primary
          </Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" color="error">Error</Button>
          <Button variant="contained" color="info">Info</Button>
          <Button variant="contained" color="success">Success</Button>
          <Button variant="contained" color="warning">Warning</Button>
        </Stack>

        <Stack spacing={2} direction="row" alignItems="center">
          <Button variant="contained" size="small">Small</Button>
          <Button variant="contained" size="medium">Medium</Button>
          <Button variant="contained" size="large">Large</Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<Send/>}>Send</Button>
          <Button variant="contained" endIcon={<Send/>}>Send</Button>
          <IconButton aria-label="send" color="success" size="small">
            <Send/>
          </IconButton>
        </Stack>

        <Stack direction="row">
          <ButtonGroup variant="contained" color="secondary" orientation="vertical" aria-label="alignment button group">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
        
        <Stack direction="row">
          <ToggleButtonGroup aria-label="text-formatting" value={formats} onChange={handleFormatChange} size="small" color="success">
            <ToggleButton value="bold" aria-label="bold">
              <FormatBold />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalic />
            </ToggleButton>
            <ToggleButton value="underline" aria-label="underline">
              <FormatUnderlined />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack direction="row">
          <ToggleButtonGroup aria-label="text-formatting" value={formatsExclusive} onChange={handleFormatExclusiveChange} size="small" exclusive>
            <ToggleButton value="bold" aria-label="bold">
              <FormatBold />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalic />
            </ToggleButton>
            <ToggleButton value="underline" aria-label="underline">
              <FormatUnderlined />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

      </Stack>
    </div>
  )
}

export default MuiButton
