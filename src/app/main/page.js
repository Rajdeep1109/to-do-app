"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TaskList from "../components/TaskList";

const Main = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // check if user is logged in
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  return (
    // show the to do tasks if user is logged in
    <div>
      <TaskList />
      {user ? (
        <div>
          <button
            onClick={() => {
              localStorage.removeItem("user");
              router.push("/"); // if logged in user is logged out to login page
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <p>Loading...</p> // incase of delay
      )}
    </div>
  );
};

export default Main;
