import { useEffect, useState } from "react";
import { client } from "../client";

const useQuery = (query, defaultFilter = "", filter, condition) => {
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    client.fetch(query).then((data) => {
      setResults(data);
      setFilteredResults(data);
    });
  }, []);

  useEffect(() => {
    if (filter !== defaultFilter) {
      condition &&
        setTimeout(() => {
          setFilteredResults(results.filter(condition));
        }, 500);
    } else {
      setTimeout(() => {
        setFilteredResults(results);
      }, 500);
    }
  }, [filter]);

  return filteredResults;
};

export default useQuery;
