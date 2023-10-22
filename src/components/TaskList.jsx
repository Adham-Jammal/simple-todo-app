import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, filter , handleDelete, handleTaskStatus }) => {
  return (
    <ul>
      {tasks
            .filter((task) => {
              return filter === "All"
                ? true
                : filter === "Active"
                ? task.active
                : !task.active;
            }).map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            handleTaskStatus={() => handleTaskStatus(task.id)}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
