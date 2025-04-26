import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

const URL = "http://localhost:3001/";

export default function ServerTest() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Server error:", error);
        setMessage(null);
      });
  }, []);

  if (!message) return null;
  return (
    <>
      <p>{message}</p>
    </>
  );
}
