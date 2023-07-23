import { useState } from "react"
import { Bookmark, BookmarkBorder } from "@mui/icons-material"
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material"

const MuiCheckbox = () => {
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTerms(event.target.checked)
  }

  const [skills, setSkills] = useState<string[]>([])
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (skills.includes(value)) {
      setSkills(skills.filter((skill) => skill !== value))
    } else {
      setSkills([...skills, value])
    }
  }
  console.log(skills)

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept tems and conditions"
          control={<Checkbox checked={acceptTerms} onChange={handleChange} />}
        />
      </Box>

      <Box>
        <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} checked={acceptTerms} onChange={handleChange} />
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value="html"
              control={<Checkbox checked={skills.includes("html")} onChange={handleSkillChange} />}
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={<Checkbox checked={skills.includes("css")} onChange={handleSkillChange} />}
            />
            <FormControlLabel
              label="Javascript"
              value="javascript"
              control={<Checkbox checked={skills.includes("javascript")} onChange={handleSkillChange} />}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  )
}

export default MuiCheckbox
