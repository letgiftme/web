import { memo } from 'react'

interface PrimaryButtonProps {
  label: string | number
  onClick: () => void
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, onClick }) => {
  return (
    <button className="button primary-button" onClick={onClick}>
      {label}
    </button>
  )
}

export default memo(PrimaryButton)
