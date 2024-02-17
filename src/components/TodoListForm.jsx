import React, { useState } from "react";

export const TodoListForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form
      className="flex flex-row w-fit p-2 m-2 "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-gray-600 focus: w-fit p-2 text-mono text-white"
        placeholder="What are we doing today?"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 p-2 text-white font-mono hover:bg-fuchsia-600 hover:text-yellow-200 "
      >
        Add Task
      </button>
    </form>
  );
};
