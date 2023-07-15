import React, { useMemo } from "react";

function MemoExample({ listofNumber }) {
  console.log("procesing data");

  const sum = useMemo(() => {
    return listofNumber.reduce((acc, item) => acc + item);
  }, [listofNumber]);

  return <div>{sum}</div>;
}

const App = () => {
  // array of numbers
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  // return component
  return (
    <div>
      <MemoExample listofNumber={numbers} />
    </div>
  );
};

export default MemoExample;
