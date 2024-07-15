import  SelectField  from "./components/SelectField"
import { Box, Button } from "@mui/material"
import TextFieldComp from "./components/TextFieldComp"
import {difficultyOptions, typeOptions, timeOptions } from "./mockdata/consts"

 const Settings = () => {
  return (
    <form>
      <TextFieldComp/> 
      <SelectField label="Category" />
      <SelectField options={difficultyOptions} label="Difficulty" />
      <SelectField options={typeOptions} label="Type" />
      <SelectField options={timeOptions} label="Time" />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
           Start quiz
        </Button>
      </Box>
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" color="success" type="submit">
        See my stats
        </Button>
      </Box>
    </form>
  )
}

export default Settings