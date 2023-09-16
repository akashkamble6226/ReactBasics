// Build a live clock that updates in real-time using useEffect to set up an interval.

import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // 
    console.log("Running");

    // cleanup the interval when component unmounts

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minuits = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minuits}:${seconds}`;
  };

  return (
    <>
      <h1>Live Clock</h1>
      <p>current Time: {formatTime(time)}</p>
    </>
  );
};

export default Clock;
