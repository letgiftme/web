import { HowWorks } from './index'

export default {
  title: 'Components/Items'
}

const data = [
  {
    key: 1,
    order: 1,
    title: 'Create Account!',
    description:
      "Create an account to get started. It's free and only takes a minute."
  }
]
export const Works = () => <HowWorks data={data} />
