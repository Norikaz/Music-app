import React, { createContext, useState, useEffect } from "react";
import { json } from "react-router-dom";
export { AuthProvider, AuthContext };

const AuthContext = createContext();
const { Provider } = AuthContext;

//takes in children components that will render inside the provider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    async function checkIfUserIsLoggedIn() {
      try {
        let response = await fetch("/api/auth/login");

        if (!response.ok) {
          throw new Error("Unauthenticated");
        }

        let fetchedUser = await response.json();
        setUser(fetchedUser);
      } catch (error) {
        setUser(false);
      }
    }

    checkIfUserIsLoggedIn();

    return () => {
      // clean up function
    };
  }, []);

  const authenticate = async (email, password) => {
    let response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Login Failed");
    }

    let loggedInUser = await response.json();
    setUser(loggedInUser);

    return loggedInUser;
  };

  const signup = async (email, password, firstName, lastName) => {
    try {
      let response = await fetch('api/auth/signup',{
        method: 'POST',
        body: JSON.stringify({email, password, firstName, lastName}),
        headers:{
          "Content-Type": "application/json",
        }
      })

      let loggedInUser = await response.json();
      setUser(loggedInUser);
  
      return loggedInUser;

    } catch (error) {
      setUser(false);
    }

  };

  const signout = async () => {
    let response = await fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Logout Failed");
    }

    let body = await response.json();
    setUser(false);

    return body;
  };

  return (
    // gives any children access to the any methods and data in values 
    <Provider
      value={{
        authenticate,
        signout,
        isAuthenticated: user ? true : false,
        user,
        signup
      }}
    >
      {children}
    </Provider>
  );
};

// Create our own hook for accessing the context from any functional component
function useAuth() {
  return React.useContext(AuthContext);
}

export { useAuth };