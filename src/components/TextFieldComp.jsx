import { Box, FormControl, TextField, MenuItem } from "@mui/material"
import { numberQuestions } from "../mockdata/consts"

 const TextFieldComp = () => {

  return (
    <Box mt={3} width="100%">
       <FormControl fullWidth>
         <TextField 
            variant="outlined"
            type="number"
            select
            label="Enter number of questions from 5 to 15"

            >
           {numberQuestions.map((option) => (
            <MenuItem key={option.id} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
         </TextField>
       </FormControl>
    </Box>
  )
}

export default TextFieldComp