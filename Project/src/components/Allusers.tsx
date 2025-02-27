import React from "react";

interface UserProps {
  id: number;
  email: string;
  username: string;
  phone: string;
}

const Allusers: React.FC<UserProps> = ({ id, username }) => {
  return (
    <div className="all-users">
      <span>ID: {id}</span>
      <span> || Name: {username}</span>
    </div>
  );
};

export default Allusers;
