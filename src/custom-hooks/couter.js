import { useState, useEffect } from "react";

export default function useCouter(initialValue, inteval) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const coutervalue =  setInterval(() => {
      setCount((prev) => prev + initialValue);
    }, inteval);

    return(() => {
        clearInterval(coutervalue)
    } )

  }, []);


  return count;
}
