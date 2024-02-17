import React from "react";

export const TodoList = ({
  task,
  handleDelete,
  handleEdit,
  toggleComplete,
}) => {
  return (
    <div className="flex flex-row w-fit  items-center  justify-center p-2 m-2">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`text-white border border-white text-mono bg-blue-600 p-2 w-56 cursor-pointer ${
          task.isComplete ? "line-through text-opacity-50" : ""
        } `}
      >
        {task.task}
      </p>
      <p
        onClick={() => handleEdit(task.id)}
        className="text-white p-2 hover:text-yellow-500 cursor-pointer "
      >
        E
      </p>
      <p
        onClick={() => handleDelete(task.id)}
        className="text-white p-2 hover:text-red-900 cursor-pointer"
      >
        D
      </p>
    </div>
  );
};
