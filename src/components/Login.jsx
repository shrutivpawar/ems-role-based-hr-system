import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Login = () => {

  const { login } = useContext(AppContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {

    const result = login(username, password);

    if (!result.success) {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Employee Management System</h1>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;