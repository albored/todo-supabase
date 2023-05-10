import PropTypes from "prop-types";
import { useData } from "../context/DataContext";

function TaskCard({ task }) {
  const { deleteTask, updateTask, showTaskDone } = useData();

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleDone = () => {
    updateTask(task.id, { edit: !task.edit });
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{task.name}</p>
        <div className="card-actions justify-end">
          <button onClick={handleDelete} className="btn btn-error">
            Delete
          </button>
          {!showTaskDone && (
            <button onClick={handleDone} className="btn btn-accent">
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskCard;
