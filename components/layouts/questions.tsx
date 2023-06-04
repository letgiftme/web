import Logo from '../logo'

type QuestionsLayoutProps = {
  percent: number
  children: React.ReactNode
}

const QuestionsLayout: React.FC<QuestionsLayoutProps> = ({
  percent = 0,
  children
}) => {
  return (
    <div className="questions-layout">
      <div className="progress-bar">
        <div className="active" style={{ width: `${percent}%` }} />
      </div>
      <div className="content">
        <Logo />
        {children}
      </div>
    </div>
  )
}

export default QuestionsLayout
