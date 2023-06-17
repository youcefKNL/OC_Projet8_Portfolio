// import React, { createContext, useState, useEffect } from "react";

// export const DataContext = createContext();

// export const DataDone = ({ children }) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       // Mettre l adresse de la futur API dans la const url https...
//       const url = "../../data/logements.json";
//       try {
//         const response = await fetch(url);
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.log("problème communication avec api");
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
//   );
// };
// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const DataContext = createContext();

// export const DataDone = ({ children }) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       // Mettre l'adresse de la future API dans la const url (https...)
//       const url = "../../data/data.json";
//       try {
//         const response = await axios.get(url);
//         const jsonData = response.data;
//         setData(jsonData);
//       } catch (error) {
//         console.log("Problème de communication avec l'API");
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
//   );
// };
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataDone = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Ajout du state pour le loader

  useEffect(() => {
    const fetchData = async () => {
      // Mettre l'adresse de la future API dans la const url (https...)
      const url = "../../data/data.json";
      try {
        const response = await axios.get(url);
        const jsonData = response.data;
        setData(jsonData);
        setLoading(false); // Mettre le loader à false une fois les données chargées
      } catch (error) {
        console.log("Problème de communication avec l'API");
        console.log(error);
        setLoading(false); // Mettre le loader à false en cas d'erreur de communication
      }
    };
    fetchData();
  }, []);

  // Afficher le loader tant que les données sont en cours de chargement
  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};
