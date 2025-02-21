import React from "react";
import { useParams } from "react-router-dom";

interface User {
  id: number;
  email: string;
  username: string;
}

interface UserDetailProps {
  users: User[];
}

const UserDetail: React.FC<UserDetailProps> = ({ users }) => {
  const { id } = useParams<{ id: string }>();
  const user = users.find((user) => user.id === Number(id));

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
