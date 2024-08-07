import {Box, FormControl, InputLabel, MenuItem,  TextField} from '@mui/material'


export interface Option {
  label: string,
  value: string | number
}

export interface selectFieldProps {
  id: string,
  label: string,
  type: string,
  value: string | number,
  onChange: (id: string, value: string | number) => void
  options?: Option[];
}

const SelectField: React.FC<selectFieldProps> = ({id, label, type, value, onChange, options}) => {
    
    

  return (
    <Box mt={3} width="100%">
       <FormControl fullWidth>
          <InputLabel>{label}</InputLabel>
          <TextField 
               variant='outlined'
               value={value} 
               onChange={(e) => onChange(id, e.target.value)}
               label={label}
               select={type === 'select'}
               type={type === 'number' ? 'number' : 'text'}
               >
          
            {type === 'select' && options?.map((option) => (
                <MenuItem value={option.value} key={option.value}>{ option.label}</MenuItem>
            ))}
          </TextField>
       </FormControl>
    </Box>
  )
}

export default SelectField