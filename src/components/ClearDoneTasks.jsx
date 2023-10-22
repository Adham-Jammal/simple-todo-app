import React from 'react'

const ClearDoneTasks = ({clearDoneTasks}) => {
  return (
    <button className="cleanDoneTasks" onClick={clearDoneTasks}>
    Clear Done
  </button>
  )
}

export default ClearDoneTasks