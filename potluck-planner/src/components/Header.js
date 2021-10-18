import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  nav {
    height: var(--nav-height);
    width: 100%;
    background-color: var(--secondary-color);
    display: flex;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <div className="nav-links-container">
          <Link />
          <Link />
        </div>
      </nav>
    </StyledHeader>
  );
}
