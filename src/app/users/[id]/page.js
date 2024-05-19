"use client";
import { useState, useEffect } from "react";

export default function PageDetails({ params }) {
  const { id } = params;
  const { usuario } = params;
  const [user, setUser] = useState([usuario]);

 /*  useEffect(() => {
    fetch(
      "https://mflixbackend.azurewebsites.net/api/movies"
    )
      .then((response) => response.json())
      .then((data) => {
        setUser(data.find((user) => user["_id"] === id));
      })
      .catch((error) => console.log(error));
  }, []); */

  return (
    <>
       <h3>{id}</h3>
       {/* <h3>{usuarios.title}</h3> */}
    {/*   <h3>{user["title"]}</h3>
      <h3>{user["fullplot"]}</h3> */}
    </>
  );
}
