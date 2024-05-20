"use client";
import { useState, useEffect } from "react";
import Loading2 from "../Loading2";

export default function PageDetails({ params }) {
  const { id } = params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(
      "https://mflixbackend.azurewebsites.net/api/movies"
    )
      .then((response) => response.json())
      .then((data) => {
        setUser(data.find((user) => user["_id"] === id));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
        {
          user === null
          ?
            (
              <Loading2/>
            )
          :
            (
            <>
             <img src={user["poster"]} alt={user["title"]} />
              <h3>{user["title"]}</h3>
              <h3>{user["fullplot"]}</h3>
            </>
            )
        }
    </>
  );
}
