import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="banner-container">
        <div className="banner-text-container">
          <h1>
            Potluck <br></br> Planner
          </h1>

          <p>
            If you have ever tried to organize a potluck through text messages,
            online to-do lists or spreadsheets, you'll understand why this app
            is essential.
            <br></br>
            In the world of social gatherings and potlucks. The "Potluck
            Planner" is king. This is your place for all things potluck
          </p>

          <Link to="/signup">Register Now</Link>
        </div>
      </div>
    </>
  );
}
