import TaskCard from "./TaskCard";
import { useData } from "../context/DataContext";
import { useEffect } from "react";

function TaskList() {
  const { tasks, loading, getTasks, showTaskDone: done } = useData();

  useEffect(() => {
    getTasks(done);
  }, [done]);

  if (loading) {
    return <p>Loading...</p>;
  } else if (tasks.length === 0) {
    return <p>No tasks yet...</p>;
  } else {
    return (
      <div className="flex flex-col gap-2 items-center mt-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    );
  }
}

export default TaskList;
