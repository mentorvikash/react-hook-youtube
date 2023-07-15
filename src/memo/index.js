// first example

import React, { memo, useState } from "react";

const NewMemoComponent = memo(({ title, description }) => {
  return (
    <>
      <h1>title: {title}</h1>
      <h2>description: {description}</h2>
    </>
  );
});

// 2nd usecase

const UserProfile = memo(({ user }) => {
  console.log("rendering user profile");
  return (
    <>
      <div>{user.name}</div>
      <div>{user.age}</div>
      <div>{user.gender}</div>
      <div>{user.grade}</div>
    </>
  );
});

// uses

const App = () => {
  const title = "welcome to revive coding ";
  const description = "learn use of memo in react ";

  const userParameter = {
    name: "John",
    age: 25,
    gender: "male",
    grade: "B+",
  };

  const [user, setUser] = useState(userParameter);

  const updataName = () => {
    setUser((prev) => ({ ...prev, name: "vikash" }));
  };

  return (
    <>
      <NewMemoComponent title={title} description={description} />
      <UserProfile user={user} />
    </>
  );
};
