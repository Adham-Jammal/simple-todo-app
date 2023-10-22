import React from 'react'

const TasksCounter = ({tasks}) => {
  return (
    <span className="tasksCounter">
    Active Tasks :
    {
      tasks.filter((task) => {
        return task.active;
      }).length
    }
  </span>
  )
}

export default TasksCounter