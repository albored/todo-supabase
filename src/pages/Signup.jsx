import { useEffect, useState } from "react";
import supabase from "../supabase/client";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

function Signup() {
  const [account, setAccount] = useState({});

  const navigate = useNavigate();

  const { createAccount } = useData();

  const login = async () => {
    supabase.auth.onAuthStateChange((e) => {
      if (e !== "SIGNED_OUT") {
        navigate("/signup");
      } else navigate("/success");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAccount(account);
  };

  useEffect(() => {
    login();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Signup;
