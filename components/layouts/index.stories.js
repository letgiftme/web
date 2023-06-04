import QuestionsLayout from './questions'

export default {
  title: 'Layouts/Question',
  component: <QuestionsLayout />,
  argTypes: {
    percent: {
      control: { type: 'number', min: 0, max: 100 }
    }
  }
}

const Template = args => (
  <QuestionsLayout percent={args.percent > 100 ? 100 : args.percent} />
)

export const Default = Template.bind({})
Default.args = {
  percent: 1
}
