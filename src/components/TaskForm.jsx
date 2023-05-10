import { useState } from "react";
import { useData } from "../context/DataContext";

function TaskForm() {
  const [task, setTask] = useState("");

  const { createTask } = useData();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-6xl px-2">
      <input
        type="text"
        placeholder="Write your todo..."
        className="input input-bordered input-accent w-full max-w-5xl "
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button className="btn btn-accent w-full my-4 ">Add</button>
    </form>
  );
}

export default TaskForm;
