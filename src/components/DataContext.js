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
import { RotatingLines } from "react-loader-spinner";

export const DataContext = createContext();

export const DataDone = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://backportfolio-n0e8.onrender.com/project";
      try {
        const response = await axios.get(url);
        const jsonData = response.data;
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.log("Problème de communication avec l'API");
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const selectData = (dataId) => {
    const selectedData = data.find((item) => item.id === dataId);
    setSelectedData(selectedData);
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <RotatingLines
          strokeColor="#8B0000"
          strokeWidth="5"
          animationDuration="0.75"
          width="300"
          visible={true}
        />
      </div>
    );
  }

  return (
    <DataContext.Provider value={{ data, selectData, selectedData }}>
      {children}
    </DataContext.Provider>
  );
};
