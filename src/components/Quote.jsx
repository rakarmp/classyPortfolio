import React, { useEffect, useState } from "react";

function Quote() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://random-quoates.vercel.app/api/katabijak"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="quote">
      <div className="container text-centered">
        {data ? <h1 key={data.no}>{data.katabijak}</h1> : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default Quote;
