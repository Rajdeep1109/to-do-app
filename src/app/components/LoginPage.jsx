"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../styles/login.css";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      //error message in case of empty field
      setErrorMessage("Both fields are required");
      return;
    }
    localStorage.setItem(
      "user",
      JSON.stringify({ username, isLoggedIn: true })
    );
    router.push("/main"); //navigate to main page
  };

  return (
    // form for login
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        {errorMessage && <p style={{ color: "red",fontWeight:"bolder"}}>{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
