import { useState } from "react";
import { useData } from "../context/DataContext";

function Login() {
  const [account, setAccount] = useState({});

  const { signinFn } = useData();

  const handleSubmit = (e) => {
    e.preventDefault();
    signinFn(account);
  };

  return (
    <div className="h-[80vh] w-full grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[25rem] py-9 rounded border border-solid border-grey-300 grid place-items-center">
        <div className="w-full max-w-xs form-control">
          <label className="label" htmlFor="email">
            <span className="label-text">Email</span>
          </label>
          <input
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
            id="email"
            type="email"
            placeholder="Write you email..."
            className="w-full max-w-xs input input-bordered"
            required
          />
        </div>

        <div className="w-full max-w-xs form-control">
          <label className="label" htmlFor="password">
            <span className="label-text">Password</span>
          </label>
          <input
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
            id="password"
            type="password"
            placeholder="Write you email..."
            className="w-full max-w-xs input input-bordered"
            required
          />
        </div>

        <button type="submit" className="w-full max-w-xs mt-5 btn btn-success">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
