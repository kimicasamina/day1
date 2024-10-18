import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useGetSearchResults(items, tags, keyword) {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const results = items.filter((item) => {
      let tags = todo?.tags?.map((tag) => tag.name);

      if (todo.name.toLowerCase().includes(searchInput.toLowerCase())) {
        return todo;
      }
      if (tags?.join(" ").toLowerCase().includes(searchInput.toLowerCase())) {
        return todo;
      }
    });
    setData(results);
  }, [keyword, items]);

  //return necessary data

  return { searchResults, loading, error };
}
