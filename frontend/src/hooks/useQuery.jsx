import { useEffect, useState } from "react";
import { client } from "../client";

const useQuery = (query, defaultFilter = '', filter, condition) => {
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    client.fetch(query).then((data) => {
        setResults(data)
        setFilteredResults(data)
    });
  }, []);

  useEffect(() => {
    console.log('Effect useQUery filter: ', filter, condition);
    filter !== defaultFilter
        ? condition && setFilteredResults(results.filter(condition))
        : setFilteredResults(results)
  }, [filter]);

  return filteredResults;
};

export default useQuery;
