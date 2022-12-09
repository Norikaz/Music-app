import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
//useAuth contains basic information and methods for a user
import { useAuth } from './context/AuthContext';
const classes =
  "bg-green-300 hover:bg-green-500 md:ml-12 p-3 rounded-2xl btn btn-primary text-black transition-all ease-in-out";

const AuthButton = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.isAuthenticated) {
    return (
      <Link className={classes} to="/login">
        Login
      </Link>
    );
  }

  const logout = () => {
    auth.signout().then(() => navigate("/"));
  };

  return (
    <div className="text-green-800">
      {auth.user.firstName} {auth.user.lastName}
      <button className={classes} onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default AuthButton;