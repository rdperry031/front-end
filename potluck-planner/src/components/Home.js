import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as BannerIllustration } from "../../src/Images/Home-Page/events-illustration.svg";

const StyledBannerContainer = styled.div`
  display: flex;
  height: 65vh;

  .banner-text-container {
    padding: 3rem 15rem 1.5rem 5rem;
    flex: 0 0 53%;
    display: flex;
    flex-direction: column;

    h1 {
      line-height: 3rem;
      margin-bottom: 2rem;
    }

    p:first-line {
      padding-left: 1rem;
    }
    p:nth-of-type(1) {
      margin-bottom: 2rem;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: var(--white);
      width: max-content;
      margin-top: 3rem;
      padding: 1rem 3rem;
      background-color: var(--accent-color);
    }
  }
`;

export default function Home() {
  return (
    <>
      <StyledBannerContainer>
        <div className="banner-text-container">
          <h1>
            Potluck <br></br> Planner
          </h1>

          <p>
            If you have ever tried to organize a potluck through text messages,
            online to-do lists or spreadsheets, you'll understand why this app
            is essential.
          </p>

          <p>
            In the world of social gatherings and potlucks. The "Potluck
            Planner" is king. This is your place for all things potluck
          </p>

          <Link to="/signup">Register Now</Link>
        </div>

        {/* <div className="banner-illustration"></div> */}
        <BannerIllustration />
      </StyledBannerContainer>
    </>
  );
}
