import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import getPosts from "./components/getPosts";
import Allusers from "./components/Allusers";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getPosts()
      .then((posts) => setData(posts))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      {data ? (
        data.map((e) => (
          <Allusers
            key={e.id}
            id={e.id}
            email={e.email}
            username={e.username}
          ></Allusers>
        ))
      ) : (
        <p>no data</p>
      )}
    </div>
  );
}

export default App;
