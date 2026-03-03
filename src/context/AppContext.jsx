import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const mockUsers = [
    { id: 1, username: "admin", password: "admin", role: "Admin" },
    { id: 2, username: "superadmin", password: "123", role: "Admin" },

    { id: 3, username: "shruti", password: "12345", role: "HR" },
    { id: 4, username: "hr1", password: "hr123", role: "HR" },

    { id: 5, username: "employee", password: "employee", role: "Employee" },
    { id: 6, username: "emp1", password: "111", role: "Employee" },
    { id: 7, username: "emp2", password: "222", role: "Employee" }
  ];

  const [user, setUser] = useState(null);
  const [employees, setEmployees] = useState([]);

  const login = (username, password) => {

    const foundUser = mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      setUser({
        id: foundUser.id,
        username: foundUser.username,
        role: foundUser.role
      });
      return { success: true };
    }

    return { success: false };
  };

  const logout = () => {
    setUser(null);
  };

  const addEmployee = (emp) => {
    setEmployees([...employees, { id: Date.now(), ...emp }]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <AppContext.Provider value={{
      user,
      employees,
      login,
      logout,
      addEmployee,
      deleteEmployee
    }}>
      {children}
    </AppContext.Provider>
  );
};