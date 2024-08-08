import { Card, CardContent, Typography, Button, Grid,Box } from '@mui/material';
import { useEffect, useState } from 'react';


interface QuestionProps {
  question: any;
  onQuizEnd: () => void;
  onNext: (score: number) => void;
  isLastQuestion: boolean;
}

const Question: React.FC<QuestionProps> = ({ question, onNext, onQuizEnd, isLastQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);


  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    setScore(answer === question.correct_answer ? 1 : 0);
  };

  const handleNextClick = () => {
    if(isLastQuestion) {
      onQuizEnd()
    } else {
      onNext(score);
    }
    
    setSelectedAnswer(null)
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{question.question}</Typography>
        <Grid container spacing={2} style={{ marginTop: '16px', marginBottom: '16px' }}>
          {question.answers?.map((answer: string, index: number) => (
            <Grid item xs={12} sm={6} key={index}>
              <Button
                variant="contained"
                color={selectedAnswer === answer ? "primary" : "secondary"}
                onClick={() => handleAnswerClick(answer)}
                fullWidth
              >
                {answer}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Button  onClick={handleNextClick} variant="outlined" 
                fullWidth 
                 disabled={selectedAnswer === null}        
        >{isLastQuestion ? 'Finish' : 'Next'}</Button>
      </CardContent>
    </Card>
  );
};

export default Question;