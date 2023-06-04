import PrimaryButton from './primary/index'
import SecondaryButton from './secondary/index'

export default {
  title: 'Components/Buttons'
}

export const Primary = () => (
  <PrimaryButton onClick={() => alert('clicked')} label={'Primary Button'} />
)

export const Secondary = () => (
  <SecondaryButton
    onClick={() => alert('clicked')}
    label={'Secondary Button'}
  />
)
