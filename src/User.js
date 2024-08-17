import React from "react";

const User = ({ data, age, mail }) => {
  return (
    <div>
      <h2>User Component</h2>
      <h4>My name is {data.name}</h4>
      <h4>My Age is {age}</h4>
      <h4>My Email is {mail}</h4>
    </div>
  );
};

export default User;
