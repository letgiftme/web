export interface QuestionType {
  id: number
  question: string
  total: number
  current: number
  answers: AnswerType[]
}

export interface AnswerType {
  id: number
  text: string
}
