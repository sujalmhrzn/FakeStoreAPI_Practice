import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GetUsers from "./components/GetUsers";
import Allusers from "./components/Allusers";

interface User {
  id: number;
  email: string;
  username: string;
}

function App() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    GetUsers()
      .then((users) => setData(users))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <h2>All Users</h2>
      {data.length > 0 ? (
        data.map((e) => (
          <div key={e.id}>
            <Link to={`/users/${e.id}`}>
              <Allusers id={e.id} email={e.email} username={e.username} />
            </Link>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default App;
