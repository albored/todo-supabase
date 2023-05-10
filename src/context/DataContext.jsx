import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import supabase from "../supabase/client";

const DataContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must me within a dataContext");
  return context;
};

export const DataContextProivider = ({ children }) => {
  const [sessionUser, setSessionUser] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showTaskDone, setShowTaskDone] = useState(false);

  const navigate = useNavigate();

  const createAccount = async (acc) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        ...acc,
        options: {
          sendEmailVerification: false,
        },
      });
      if (error) throw error;

      if (data || data.user) {
        navigate("/success");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error(error);
      setSessionUser(false);
    }
    if (data.session) setSessionUser(true);
  };

  const signinFn = async (acc) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        ...acc,
      });

      if (error) throw error;

      setSessionUser(true);
      if (data.user) {
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (task) => {
    setLoading(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { error } = await supabase.from("tasks").insert({
        name: task,
        userId: user.id,
      });

      if (error) throw error;

      const { data } = await supabase
        .from("tasks")
        .select()
        .eq("userId", user.id)
        .eq("edit", false);

      setTasks([...data]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getTasks = async (done = false) => {
    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("tasks")
      .select()
      .eq("userId", user.id)
      .eq("edit", done)
      .order("id", { ascending: true });

    if (error) throw error;

    setTasks([...data]);
    setLoading(false);
  };

  const deleteTask = async (id) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    await supabase.from("tasks").delete().eq("userId", user.id).eq("id", id);

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = async (id, updatedField) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    await supabase
      .from("tasks")
      .update(updatedField)
      .eq("userId", user.id)
      .eq("id", id);

    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <DataContext.Provider
      value={{
        createAccount,
        setSessionUser,
        checkSession,
        signinFn,
        createTask,
        getTasks,
        deleteTask,
        updateTask,
        setShowTaskDone,
        showTaskDone,
        sessionUser,
        tasks,
        loading,
      }}>
      {children}
    </DataContext.Provider>
  );
};

DataContextProivider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContext;
