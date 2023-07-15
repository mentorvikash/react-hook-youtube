import React from "react";

const withLogger = (eventHandler) => {
  return (event) => {
    console.log("event", event);
    eventHandler(event);
  };
};

function index() {
  const handleClick = (event) => {
    console.log("I got clicked");
  };

  const HandleClickwithlog = withLogger(handleClick);

  return (
    <button type="submit" onClick={HandleClickwithlog}>
      submit
    </button>
  );
}

export default index;

/////// 2nd Example

const NewComponent = () => {
  const data = [
    { name: "vikash", age: "24" },
    { name: "rajat", age: "21" },
    { name: "vishal", age: "19" },
  ];

  const listElement = data.map((el) => (
    <li>
      {" "}
      my name is {el.name} and age is {el.age}{" "}
    </li>
  ));

  return <ul>{listElement} </ul>;
};
