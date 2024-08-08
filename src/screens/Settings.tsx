import  SelectField  from "../components/SelectField"
import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchQuestions } from "../redux/quizAPI"
import { AppDispatch, RootState } from "../redux/store"
import { useState } from "react"
import { setCategory, setDifficulty, setNumberOfQuestions, setTimer, setType } from "../redux/quizSlice"
import { fieldConfig } from "../mockdata/fieldConfig"



 const Settings: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const [formState, setFormState] = useState({
    category: '',
    difficulty: '',
    type: '',
    numberOfQuestions: 5,
    timer: 60,
  })

const handleInputChange = (id: string, value: string | number) => {
  setFormState({
    ...formState,
    [id]: value,
  })
}
  

  const startQuiz = () => {
    dispatch(setCategory(formState.category));
    dispatch(setDifficulty(formState.difficulty));
    dispatch(setType(formState.type))
    dispatch(setNumberOfQuestions(formState.numberOfQuestions))
    dispatch(setTimer(formState.timer))
    navigate('/quiz')
  }
  
  return (
    <Box mt={3} width="100%">
      <Typography variant="h3" fontWeight="bold">
            Quiz App
      </Typography>
      {fieldConfig.map((field) => (
        <SelectField
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type}
          value={formState[field.id as keyof typeof formState]}
          onChange={handleInputChange}
          options={field.options}
        />
      ))}
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" onClick={startQuiz}>
           Start quiz
        </Button>
      </Box>
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" color="success" type="submit">
        See my stats
        </Button>
      </Box>
    </Box>
  )
}

export default Settings