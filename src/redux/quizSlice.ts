import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface QuizState {
  category: string;
  difficulty: string;
  type: string;
  numberOfQuestions: number;
  questions: any[];
  score: number;
  timer: number;
}

const initialState: QuizState = {
  category: '',
  difficulty: '',
  type: '',
  numberOfQuestions: 0,
  questions: [],
  score: 0,
  timer: 60,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setDifficulty: (state, action: PayloadAction<string>) => {
      state.difficulty = action.payload;
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setNumberOfQuestions: (state, action: PayloadAction<number>) => {
      state.numberOfQuestions = action.payload;
    },
    setQuestions: (state, action: PayloadAction<any[]>) => {
      state.questions = action.payload;
    },
    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    setTimer: (state, action: PayloadAction<number>) => {
      state.timer = action.payload;
    }
  },
});

export const { setCategory, setDifficulty, setType, setNumberOfQuestions, setQuestions, setScore, setTimer } = quizSlice.actions;
export default quizSlice.reducer;

