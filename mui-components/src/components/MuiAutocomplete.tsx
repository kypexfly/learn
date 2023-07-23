import { useState } from "react"
import { Autocomplete, Stack, TextField } from "@mui/material"

const skills = ["HTML", "CSS", "JavaScript", "React", "Vue", "Angular", "Node", "MongoDB"]

type Skill = {
  id: number
  label: string
}

const skillsOptions: Skill[] = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}))

const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null)
  const [skill, setSkill] = useState<Skill | null>(null)

  console.log(value)
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(_event: any, newValue: string | null) => setValue(newValue)}
        // freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(_event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  )
}

export default MuiAutocomplete
