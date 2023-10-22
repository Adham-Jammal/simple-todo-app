import React from 'react'

const Task = ({ task, handleDelete, handleTaskStatus }) => {
  return (
    <li key={task.id}>
    <div className="content">
      <label className="input-container">
        <input
          type="checkbox"
          name="checkbox"
          checked={!task.active}
          onChange={() => handleTaskStatus(task.id)}
        />
        <span className="checkmark"></span>
      </label>

      <span className={task.active ? "active" : "done"}>
        {task.task}
      </span>
    </div>
    <div className="delete-btn">
      <button onClick={() => handleDelete(task.id)}>
        <img
          className="deleteTask"
          src={process.env.PUBLIC_URL + "/images/trash-bin.png"}
          alt="delete-icon"
        />
      </button>
    </div>
  </li>
  )
}

export default Task