import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--nav-height);
    width: 100%;
    background-color: var(--secondary-color);

    h3 {
      margin-left: 4%;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <h3>Potluck Planner </h3>
        <div className="nav-links-container">
          <Link />
          <Link />
        </div>
      </nav>
    </StyledHeader>
  );
}
