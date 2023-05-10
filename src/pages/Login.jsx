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
        <div className="form-control w-full max-w-xs">
          <label className="label" htmlFor="email">
            <span className="label-text">Email</span>
          </label>
          <input
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
            id="email"
            type="email"
            placeholder="Write you email..."
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>

        <div className="form-control w-full max-w-xs">
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
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-full max-w-xs mt-5">
          Login
        </button>
      </form>

      <div className="absolute bottom-[200px]">
        <p>email: ae791a5b49@fireboxmail.lol</p>
        <p>password: albored777</p>
      </div>
    </div>
  );
}

export default Login;
