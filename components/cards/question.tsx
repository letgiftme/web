import { AnswerType, QuestionType } from 'models/question'
import { useState } from 'react'

const QuestionCard: React.FC<{ data: QuestionType }> = ({ data }) => {
  const [selected, setSelected] = useState<number>()

  const handleSelect = (e: number) => {
    setSelected(e)
  }

  return (
    <div className="question-card">
      <small>
        {data.current}/{data.total}
      </small>
      <p>{data.question}</p>
      <div className="options">
        {data.answers.map((item: AnswerType) => (
          <span
            key={item.id}
            className={selected === item.id ? 'active' : item.id.toString()}
            onClick={() => handleSelect(item.id)}
          >
            {item.text}
          </span>
        ))}
      </div>
      <button>Next Question</button>
    </div>
  )
}

export default QuestionCard
