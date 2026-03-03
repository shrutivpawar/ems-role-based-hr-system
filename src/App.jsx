import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {

  const { user } = useContext(AppContext);
  
  if (!user) {
    return <Login />;
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Employee Management System</h1>
        <Navbar />
        <EmployeeForm />
        <EmployeeList />
      </div>
    </div>
  );
}

export default App;