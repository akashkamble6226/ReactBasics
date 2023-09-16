// fetching data from api and displying random text from it.

import { useEffect, useState } from "react";
const FetchAPI = () => {
  const [data, setData] = useState([]);
  var [random, setRandom] = useState();

  useEffect(() => {
    async function getDataFromApi() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setData(data);
      } catch (e) {
        console.error(e);
      }
    }

    getDataFromApi();
  }, []);

  function getRandomeTitle() {
    setRandom(Math.floor(Math.random() * data.length));
  }

  return (
    <div>
      <h1>Data from API</h1>
      <button onClick={getRandomeTitle}>Click Me</button>
      {random == null ? (
        <h2>Click to generate Randome text</h2>
      ) : (
        <h2>{data[random].id}-{data[random].title}</h2>
      )}
    </div>
  );
};

export default FetchAPI;
