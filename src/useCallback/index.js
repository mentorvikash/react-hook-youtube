import React, { useCallback } from "react";

function index() {
  const [value, setValue] = useState(0);

  const handleCounter = () => {
    setValue((prev) => prev + 1);
  };

  const handleCounterCb = useCallback(handleCounter, [value]);
  //   // or
  //   const handleCounterCb = useCallback(() => {
  //     setValue((prev) => prev + 1);
  //   }, [value]);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleCounterCb}></button>
    </div>
  );
}

export default index;

