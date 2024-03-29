export default {
  title: 'Example/Button',
  component: <h2 />,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template = args => <h2 {...args}>{args.label}</h2>

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button'
}
