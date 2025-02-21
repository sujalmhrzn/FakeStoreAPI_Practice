import React from "react";

interface UserProps {
  id: number;
  email: string;
  username: string;
}

const Allusers: React.FC<UserProps> = ({ id }) => {
  return (
    <div className="all-users">
      <h3>ID: {id}</h3>
    </div>
  );
};

export default Allusers;
