import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { DataContextProivider } from "./context/DataContext";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const Login = lazy(() => import("./pages/Login"));
  const Signup = lazy(() => import("./pages/Signup"));
  const Success = lazy(() => import("./pages/Success"));

  return (
    <DataContextProivider>
      <div className="app">
        <Suspense fallback={"Loading..."}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </Suspense>
      </div>
    </DataContextProivider>
  );
}

export default App;
