import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataDone = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Mettre l adresse de la futur API dans la const url https...
      const url = "../../data/data.json";
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log("problème communication avec api");
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};
