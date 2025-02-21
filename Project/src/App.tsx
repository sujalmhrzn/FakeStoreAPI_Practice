import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GetUsers from "./components/GetUsers";
import Allusers from "./components/Allusers";
import UserDetail from "./components/UserDetail";

interface User {
  id: number;
  email: string;
  username: string;
}

function App() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    GetUsers()
      .then((posts) => setData(posts))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Router>
      <div className="App">
        <h2>All Users</h2>
        {data.length > 0 ? (
          data.map((e) => (
            <div key={e.id}>
              <Link to={`/user/${e.id}`}>
                <Allusers id={e.id} email={e.email} username={e.username} />
              </Link>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}

        <Routes>
          <Route path="/user/:id" element={<UserDetail users={data} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
