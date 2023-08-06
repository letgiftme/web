interface WorkProps {
  order: number
  title: string
  description: string
}

const HowWorks: React.FC<{ data: WorkProps[] }> = ({ data }) => {
  return (
    <div id="how-works" className="container">
      <ul id="about-item">
        {data.map((item: WorkProps) => (
          <li key={item.order}>
            <span>{item.order}</span>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HowWorks
