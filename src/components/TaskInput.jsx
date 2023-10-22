import React from 'react'

const TaskInput = ({task , setTask , handelAdd}) => {
  return (
    <input
    className="taskInput"
    type="text"
    onKeyUp={(e) => handelAdd(e)}
    value={task}
    onChange={(e) => setTask(e.target.value)}
    placeholder="Press Enter to Add a New Task"
  />
  )
}

export default TaskInput