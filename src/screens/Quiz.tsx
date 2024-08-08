import { Alert, Box, CircularProgress, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../redux/store"
import { useNavigate } from "react-router-dom"
import { fetchQuestions } from "../redux/quizAPI"
import { setQuestions, setScore } from "../redux/quizSlice"
import Question from "../components/Question"
import Timer from "../components/Timer"

interface QuizProps {
  onQuizEnd: () => void
}


const Quiz: React.FC<QuizProps> = ({onQuizEnd})  => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { category, difficulty, type, numberOfQuestions, questions, timer } = useSelector((state: RootState) => state.quiz);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)


  useEffect(() => {
   const getQuestions = async () => {
    try {
      const fetchedQuestions = await fetchQuestions(category, difficulty, type, numberOfQuestions)
      dispatch(setQuestions(fetchedQuestions)) 
    } catch (err) {
      setError('Failed to fetch questions. Please try again later')
    } finally {
      setLoading(false)
    }
    
   }
    getQuestions()
  }, [dispatch, category, difficulty, type, numberOfQuestions])

  const handleNextQuestion = (score: number) => {
    dispatch(setScore(score))
    if(currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      onQuizEnd()
    }
  }

  const handleTimeUp = () => {
    onQuizEnd()
  }

  const handleQuizEnd = () => {
    navigate('/final')
  }

  if(loading) {
    return <CircularProgress/>
  }

  if(error) {
    return <Alert severity="error">{error}</Alert>
  }

  return (
    <Box mt={3} width="100%">
      <Timer initialTime={timer} onTimeUp={handleTimeUp}/>
      {questions.length > 0 && (
        <Question
           question={questions[currentQuestionIndex]}
           onNext={handleNextQuestion}
           onQuizEnd={handleQuizEnd}
           isLastQuestion={currentQuestionIndex === questions.length - 1}
        />
      )}
    </Box>
  )
}

export default Quiz