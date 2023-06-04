import { memo } from 'react'

interface SecondaryButtonProps {
  label: string | number
  onClick: () => void
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  label,
  onClick
}) => {
  return (
    <button className="button secondary-button" onClick={onClick}>
      {label}
    </button>
  )
}

export default memo(SecondaryButton)
