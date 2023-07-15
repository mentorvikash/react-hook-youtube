// passing fucntion as props
import React, { useState, useCallback } from "react";

function ChildrenComp({ name, handleChange }) {
  return (
    <>
      <input name="name" value={name} onChange={handleChange} />
    </>
  );
}

function Parent() {
  const [name, setName] = useState("");

  const changeName = useCallback((getname) => {
    setName(getname);
  }, []);

  return (
    <div>
      <ChildrenComp name={name} handleChange={changeName} />
    </div>
  );
}

export default Parent;
