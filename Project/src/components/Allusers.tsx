import React from "react";

interface UserProps {
  id: number;
  email: string;
  username: string;
}
const Allusers: React.FC<UserProps> = ({ id, email, username }) => {
  return (
    <div className="all-users">
      <h3>ID: {id}</h3>
      <h4>Email: {email}</h4>
      <h4>Username: {username}</h4>
    </div>
  );
};

export default Allusers;
