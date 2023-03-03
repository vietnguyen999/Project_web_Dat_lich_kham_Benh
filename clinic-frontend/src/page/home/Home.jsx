import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { removeToken } from "../../helpers";
import { useNavigate } from "react-router";

export const Home = () => {
  const { user, setUser } = useAuthContext();
  console.log(user);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    setUser(undefined);
    navigate("/signIn", { replace: true });
  };
  return (
    <>
      {user ? (
        <>
          <h2>{user.username}</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Home</h1>
        </>
      )}
    </>
  );
};
