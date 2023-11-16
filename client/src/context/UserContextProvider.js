import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      // get token from local storage
      const token = localStorage.getItem("token");
      console.log(token);

      try {
        const response = await fetch("http://localhost:4000/api/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        const { email, _id: id, role, username } = data.user;
        setUser({ email, id, role, username });
        console.log({ email, id, role, username });
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
