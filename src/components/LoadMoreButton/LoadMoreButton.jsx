import React from 'react'

const LoadMoreButton = (onClick) => {
  const loadMore = () => {
    this.props.onClick()
  }
  
  return (
    <button type='button' onClick={loadMore}>
      
    </button>
  )
}

export default LoadMoreButton
