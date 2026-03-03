import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const EmployeeForm = () => {

  const { addEmployee, user } = useContext(AppContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
    role: ""
  });

  const [error, setError] = useState("");

  if (user.role === "Employee") return null;

  const handleSubmit = () => {

    if (!form.name || !form.email || !form.role) {
      setError("All fields required");
      return;
    }

    if (user.role === "HR" && form.role !== "Employee") {
      setError("HR can only add Employees");
      return;
    }

    addEmployee(form);

    setForm({
      name: "",
      email: "",
      department: "",
      salary: "",
      role: ""
    });

    setError("");
  };

  return (
    <>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <select
        value={form.department}
        onChange={(e) => setForm({ ...form, department: e.target.value })}
      >
        <option value="">Select Department</option>
        <option value="IT">IT</option>
        <option value="CA">CA</option>
        <option value="Finance">Finance</option>
        <option value="Sales">Sales</option>
      </select>

      <input
        placeholder="Salary"
        value={form.salary}
        onChange={(e) => setForm({ ...form, salary: e.target.value })}
      />

      <select
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      >
        <option value="">Select Role</option>

        {/* Admin can add both */}
        {user.role === "Admin" && (
          <>
            <option value="HR">HR</option>
            <option value="Employee">Employee</option>
          </>
        )}

        {/* HR can add only employee */}
        {user.role === "HR" && (
          <option value="Employee">Employee</option>
        )}
      </select>

      <button onClick={handleSubmit}>Add</button>

      {error && <p className="error">{error}</p>}
    </>
  );
};

export default EmployeeForm;