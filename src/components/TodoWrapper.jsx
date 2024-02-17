import React, { useEffect, useState } from "react";
import { TodoListForm } from "./TodoListForm";
import {v4 as uuid} from 'uuid'
import { TodoList } from "./TodoList";
import { EditTodoList } from "./EditTodoList";

export const TodoWrapper = () => {
   const [todos, setTodos] = useState([])
   const addTodo = (todo) =>{
   let uniqueId =  uuid()
   setTodos([...todos, {id : uniqueId, task: todo, isComplete: false, isEditing: false} ])
   }
   const handleDelete = id =>{
    setTodos(todos.filter(todo => todo.id !== id) )
  }
  const handleEdit = id => {
    setTodos(todos.map(todo => todo.id === id ?{...todo, isEditing : !todo.isEditing} : todo))
  }
  const editTask = (task, id, update) =>{
    if(update){
      setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing : !todo.isEditing} : todo))
    } else{
      setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing : !todo.isEditing} : todo))
          }
  }
  const toggleComplete = id =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, isComplete: !todo.isComplete} : todo))
  }
  return (

    <div className="bg-blue-500 h-screen flex flex-row  justify-center">
      <div className="bg-gray-700 h-fit w-1/2 flex flex-col justify-center items-center shadow-lg rounded m-20 p-3 border">
      <h1 className="text-white text-mono text-2xl p-2 m-2">Things Todo Today!!!</h1>
        <TodoListForm addTodo = {addTodo} />
        { todos.map((todo, index) => ( todo.isEditing ?
        <EditTodoList task = {todo} editTask={editTask} key={index}/> :
          <TodoList task={todo} handleDelete ={handleDelete} handleEdit ={handleEdit} toggleComplete ={toggleComplete} key ={index} />
        ))}
        
      </div>
    </div>
  );
};
