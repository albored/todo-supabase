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
          <h1 className="mb-5 text-4xl font-bold text-center uppercase">
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
        <h1 className="mb-5 text-4xl font-bold text-center uppercase">
          Please Login or Sign in
        </h1>
        <div className="text-center">
          <p>email: ae791a5b49@fireboxmail.lol</p>
          <p>password: albored777</p>
        </div>
      </div>
    );
  }
}

export default Home;
