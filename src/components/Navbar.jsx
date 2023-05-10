import { Link, useNavigate } from "react-router-dom";
import supabase from "../supabase/client";
import userImg from "../assets/user-img.png";
import { useEffect } from "react";
import { useData } from "../context/DataContext";

function Navbar() {
  const {
    setSessionUser,
    sessionUser,
    checkSession,
    showTaskDone,
    setShowTaskDone,
  } = useData();

  const navigate = useNavigate();

  useEffect(() => {
    checkSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionUser]);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          AlBank
        </Link>
      </div>

      {sessionUser && (
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button
                onClick={() => setShowTaskDone(!showTaskDone)}
                className={`btn btn-outline ${
                  !showTaskDone ? "btn-accent" : "btn-error"
                } `}>
                {!showTaskDone ? "Show Done" : "Show Todo"}
              </button>
            </li>
          </ul>
        </div>
      )}

      <div className="navbar-end">
        {!sessionUser ? (
          <>
            <Link to="/login" className="btn mr-2">
              Login
            </Link>
            <Link to="/signup" className="btn btn-accent">
              Sign up
            </Link>
          </>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={userImg} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <button
                  onClick={async () => {
                    await supabase.auth.signOut();
                    setSessionUser(false);
                    navigate("/login");
                  }}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
