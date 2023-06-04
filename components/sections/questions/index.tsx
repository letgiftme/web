import QuestionCard from 'components/cards/question'
import QuestionsLayout from 'components/layouts/questions'
import { QuestionType } from 'models/question'
import { useEffect, useState } from 'react'

type QuestionSectionProps = {
  questionId: number
}

const QuestionSection: React.FC<QuestionSectionProps> = ({ questionId }) => {
  const [data, setData] = useState<QuestionType>()
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState<boolean>()

  const fetchQuestion = () => {
    try {
      setLoading(true)
      setData({
        id: questionId,
        question: 'What is the capital of Turkey?',
        current: 2,
        total: 9,
        answers: [
          {
            id: 1,
            text: 'Ankara'
          },
          {
            id: 2,
            text: 'Istanbul'
          },
          {
            id: 3,
            text: 'Izmir'
          },
          {
            id: 4,
            text: 'Bursa'
          }
        ]
      })
    } catch (e) {
      setError('There is an error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuestion()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (error) return <>{error}</>

  if (loading || !data) return <>Loading...</>

  return (
    <QuestionsLayout percent={(2 / 9) * 100}>
      <QuestionCard data={data as QuestionType} />
    </QuestionsLayout>
  )
}

export default QuestionSection
