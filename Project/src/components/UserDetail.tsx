import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GetUserDetails from "./GetUserDetails";

interface User {
  id: number;
  email: string;
  username: string;
}

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id) {
      GetUserDetails(Number(id))
        .then((userData) => setUser(userData))
        .catch((error) => console.error("Error fetching user:", error));
    }
  }, [id]);

  if (!user) {
    return <h2>User Not Found</h2>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
    </div>
  );
};

export default UserDetail;
