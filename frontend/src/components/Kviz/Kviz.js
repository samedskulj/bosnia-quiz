import React, { useState, useEffect } from "react";
import axios from "axios";
const Kviz = ({ history }) => {
  const [privateData, setPrivateData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("Nemate pristup ovoj ruti, molimo Vas ulogujte se!");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {privateData}
    </div>
  );
};

export default Kviz;
