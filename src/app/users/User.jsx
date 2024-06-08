"use client";
import React, { useEffect, useRef } from 'react';
import "./users.css";
import Link from "next/link";

export default function User(props) {
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      const words = titleRef.current.innerText.split(' ');
      if (words.length > 10) { // Limit to 10 words
        titleRef.current.innerText = words.slice(0, 10).join(' ') + '...';
      }
    }
  }, [props.Title]);

  return (
    <li className="user-item">
      <div className="card user-item__content">
        <Link href={`/users/${props.Id}`} usuario={props}>
          <div>
            {
              
              props.Picture ? <img className="imgStandar" src={props.Picture} alt={props.Title} onError={(event) => {
                event.target.src = 'https://hips.hearstapps.com/hmg-prod/images/hlh110122fearedefiningability-016-1666713776.png?crop=1.00xw:0.743xh;0,0.0935xh&resize=640:*';
              }} /> : <img className="imgStandar" src="https://hips.hearstapps.com/hmg-prod/images/hlh110122fearedefiningability-016-1666713776.png?crop=1.00xw:0.743xh;0,0.0935xh&resize=640:*" alt={props.Title} />
            }
            <div className="titleStandar">
              <h2 title={props.Title}>{props.Title}</h2>
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
}