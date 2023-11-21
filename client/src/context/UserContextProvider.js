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
        const { email, _id: id, role, name } = data.user;
        setUser({ email, id, role, name });
        console.log({ email, id, role, name });
      } catch (error) {
        console.log(error);
      }
    };

    if(localStorage.getItem("token")){
      getUser();
    }
  }, []);
  return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>;
};
