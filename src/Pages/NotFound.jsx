import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1>404 - Page Not Found/404 - Sivua ei löydy</h1>
      <p>
        The page you are looking for doesn't exist/Sivu jota yrität tavoittaa ei
        ole olemassa
      </p>
      <Link to={"/"}>
        <Button>Back to Homepage/Takasin etusivulle</Button>
      </Link>
    </div>
  );
}
