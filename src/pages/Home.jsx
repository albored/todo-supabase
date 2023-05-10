import { useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useData } from "../context/DataContext";

function Home() {
  const { sessionUser } = useData();

  useEffect(() => {}, [sessionUser]);

  if (sessionUser) {
    return (
      <div className="grid justify-center align-top h-[80vh] mt-10 ">
        <div className="max-w-[700px] w-screen ">
          <h1 className="uppercase text-4xl font-bold mb-5 text-center">
            Todo App
          </h1>

          <TaskForm />
          <TaskList />
        </div>
      </div>
    );
  } else {
    return (
      <div className="grid place-items-center h-[80vh] mt-10 ">
        <h1 className="uppercase text-4xl font-bold mb-5 text-center">
          Please Login or Sign in
        </h1>
      </div>
    );
  }
}

export default Home;
