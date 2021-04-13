import React, { useState, useEffect } from "react";
import axios from "axios";
const Kviz = ({ history }) => {
  const [privateData, setPrivateData] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
    }
    const fetchData = async () => {
      const config = {
        header: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
      }
    };

    fetchData();
  }, [history]);

  return <div>test</div>;
};

export default Kviz;
