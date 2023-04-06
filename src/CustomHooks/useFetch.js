import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const removeTour = (id) => {
    const newTour = data.filter((x) => x.id !== id);
    setData(newTour);
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((datas) => setData(datas));
    setLoading(true);
  }, [url]);
  return { data, loading, removeTour };
};

export default useFetch;
