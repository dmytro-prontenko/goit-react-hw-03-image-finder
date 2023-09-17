import React from 'react'
import { StyledButton } from './Button.Styled'

const Button = () => {
  return (
    <StyledButton type="submit" className="button">
    <span className="button-label">Search</span>
  </StyledButton>
  )
}

export default Button
