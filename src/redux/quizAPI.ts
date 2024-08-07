
import axios from 'axios';
import axiosRetry from 'axios-retry';

const API_URL = 'https://opentdb.com/api.php';

axiosRetry(axios, {
  retries: 5,
  retryCondition: (error) => {
    return error.response?.status === 429
  },
  retryDelay: (retryCount, error) => {
    const retryAfter = error.response?.headers['retry-after']
    if(retryAfter) {
      return parseInt(retryAfter, 10) * 1000
    }
    return Math.pow(2, retryCount) * 1000
  }
})

export const fetchQuestions = async( category: string, difficulty: string, type: string, number: number) => {
  const response = await axios.get(API_URL, {
    params: {
      amount: number,
      category,
      difficulty,
      type,
    },
  });
  
  const processedQuestions = response.data.results.map((question: any) => ({
    ...question,
    answers: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5),
  }));

  return processedQuestions;
  
};