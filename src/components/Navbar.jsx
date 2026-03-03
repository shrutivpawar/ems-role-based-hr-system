import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {

  const { user, logout } = useContext(AppContext);

  return (
    <div className="navbar">
      <span>Logged in as: {user.username} ({user.role})</span>
      <button style={{ width: "100px" }} onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;