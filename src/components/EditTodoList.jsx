import {useState} from 'react'

export const EditTodoList = ({task, editTask}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      editTask(value,task.id,true)
      setValue("");
    };
    const handleCancel = (e) =>{
      e.preventDefault()
      editTask(task.task,task.id,false)
      setValue('')
    }
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
          placeholder="Update this task?"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 p-2 text-white font-mono hover:bg-fuchsia-600 hover:text-yellow-200 "
        >
          Update Task
        </button>
        <button
          onClick={handleCancel}
          className="bg-red-900 p-2 text-white font-mono hover:bg-red-600 hover:text-yellow-200 "
        >
          Cancel Upate
        </button>
      </form>
    )
}
