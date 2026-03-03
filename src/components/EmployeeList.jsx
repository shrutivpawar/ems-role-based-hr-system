import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const EmployeeList = () => {

  const { employees, deleteEmployee, user } = useContext(AppContext);

  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");

  // 🔎 Search Filter
  let filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🏢 Department Filter
  if (selectedDept !== "All") {
    filtered = filtered.filter(emp => emp.department === selectedDept);
  }

  const hrList = filtered.filter(emp => emp.role === "HR");
  const employeeList = filtered.filter(emp => emp.role === "Employee");

  return (
    <>
      {/* Search Box */}
      <input
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Department Buttons */}
      <div style={{
        display: "flex",
        gap: "8px",
        marginTop: "10px",
        flexWrap: "wrap"
      }}>
        {["All", "IT", "CA", "Finance", "Sales"].map(dept => (
          <button
            key={dept}
            style={{
              width: "auto",
              padding: "6px 12px",
              background: selectedDept === dept ? "#3748c7" : "#4a5bdc"
            }}
            onClick={() => setSelectedDept(dept)}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* 🔐 ADMIN VIEW */}
      {user.role === "Admin" && (
        <>
          <h3 style={{ marginTop: "20px" }}>HR</h3>

          {hrList.length === 0 && <p>No HR found</p>}

          {hrList.map(emp => (
            <div key={emp.id} className="employee-card">
              <p><strong>{emp.name}</strong></p>
              <p>{emp.email}</p>
              <p>{emp.department}</p>
              <p>₹ {emp.salary}</p>
              <button onClick={() => deleteEmployee(emp.id)}>
                Delete
              </button>
            </div>
          ))}

          <h3 style={{ marginTop: "20px" }}>Employees</h3>

          {employeeList.length === 0 && <p>No Employees found</p>}

          {employeeList.map(emp => (
            <div key={emp.id} className="employee-card">
              <p><strong>{emp.name}</strong></p>
              <p>{emp.email}</p>
              <p>{emp.department}</p>
              <p>₹ {emp.salary}</p>
              <button onClick={() => deleteEmployee(emp.id)}>
                Delete
              </button>
            </div>
          ))}
        </>
      )}

      {/* 🔐 HR VIEW */}
      {user.role === "HR" && (
        <>
          {employeeList.length === 0 && <p>No Employees found</p>}

          {employeeList.map(emp => (
            <div key={emp.id} className="employee-card">
              <p><strong>{emp.name}</strong></p>
              <p>{emp.email}</p>
              <p>{emp.department}</p>
              <p>₹ {emp.salary}</p>
              <button onClick={() => deleteEmployee(emp.id)}>
                Delete
              </button>
            </div>
          ))}
        </>
      )}

      {/* 🔐 EMPLOYEE VIEW */}
      {user.role === "Employee" && (
        <>
          {employeeList.length === 0 && <p>No Employees found</p>}

          {employeeList.map(emp => (
            <div key={emp.id} className="employee-card">
              <p><strong>{emp.name}</strong></p>
              <p>{emp.email}</p>
              <p>{emp.department}</p>
              <p>₹ {emp.salary}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default EmployeeList;