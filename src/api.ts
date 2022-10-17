import { shuffleArray } from "./utils";

export enum Difficulty {
  easy = "easy",
  medium = "medium",
  hard = "hard",
}

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & {
  answers: string[];
};

export const fetchQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((result: Question) => ({
    ...result,
    answers: shuffleArray([...result.incorrect_answers, result.correct_answer]),
  }));
};
