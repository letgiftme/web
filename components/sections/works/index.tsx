import { HowWorks as HW } from 'components/items'

const data = [
  {
    key: 1,
    order: 1,
    title: 'Create Account!',
    description:
      "Create an account to get started. It's free and only takes a minute."
  },
  {
    key: 2,
    order: 2,
    title: 'Answer The Questions!',
    description: 'Let us to decide which products are best for you.'
  },
  {
    key: 3,
    order: 3,
    title: 'Share Your List!',
    description:
      "Time to share your list with your friend! And don't forget to hope to receive the gifts."
  }
]
const HowWorks = () => {
  return <HW data={data} />
}

export default HowWorks
