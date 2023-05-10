import { Link } from "react-router-dom";

function Success() {
  return (
    <div>
      <h1>Success</h1>
      <Link to="/" className="btn">
        Go to home
      </Link>
    </div>
  );
}

export default Success;
