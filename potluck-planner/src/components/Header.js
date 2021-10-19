import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--nav-height);
    width: 100%;
    background-color: var(--secondary-color);

    h2 {
      margin-left: 3rem;
    }

    .mobile-nav-links-container,
    .mobile-nav-menu-btn {
      display: none;
      // toggled with js
    }

    .nav-links-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 3rem;

      a {
        display: inline-block;
        text-decoration: none;
        white-space: nowrap;
        color: inherit;
      }

      a:nth-of-type(1) {
        margin-right: 2rem;
      }

      a:nth-of-type(2) {
        padding: 5% 10%;
        border: 1px solid black;
        -webkit-transition: 0.5s;

        &:hover {
          border: 1px solid var(--white);
          color: var(--white);
          -webkit-transform-origin: 0% 100%;
        }
      }
    }

    @media only screen and (max-width: 768px) {
      .nav-links-container {
        display: none;
      }

      .mobile-nav-menu-btn {
        display: flex;
        align-items: center;

        div {
          margin-right: 2rem;
        }

        span {
          display: block;
          width: 25px;
          height: 4px;
          margin: 5px auto;
          background-color: var(--black);
        }
      }
    }
  }

  .nav-mobile-active {
    padding-top: 1rem;
    flex-wrap: wrap;
    height: calc(var(--nav-height) * 3);
    h2,
    .nav-links-container {
      flex: 0 0 50%;
    }

    .mobile-nav-menu-btn {
      span:nth-of-type(1) {
        transform: rotate(45deg) translateY(6px);
      }
      span:nth-of-type(2) {
        display: none;
      }
      span:nth-of-type(3) {
        transform: rotate(-45deg) translateY(-6px);
      }
    }

    .mobile-nav-links-container {
      flex: 0 0 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      height: calc(var(--nav-height) * 2);
      width: 100%;

      a {
        text-decoration: none;
        color: inherit;
        height: 45%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: var(--black);
          color: white;
          font-weight: bold;
        }
      }
      a:nth-of-type(1) {
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);

    return () => window.removeEventListener("resize", updateMedia);
  });

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <StyledHeader>
      <nav className={navOpen && !isDesktop ? "nav-mobile-active" : null}>
        <h2>Potluck Planner </h2>
        <div className="nav-links-container">
          <NavLink
            to="/login"
            activeStyle={{
              fontWeight: "bold",
              color: "var(--white)",
            }}
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            activeStyle={{
              fontWeight: "bold",
              color: "var(--white)",
              border: "1px solid var(--white)",
            }}
          >
            {" "}
            Sign Up
          </NavLink>
        </div>

        <div onClick={toggleNav} className="mobile-nav-menu-btn">
          <div>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        <div className="mobile-nav-links-container ">
          <NavLink
            onClick={toggleNav}
            to="/login"
            activeStyle={{
              backgroundColor: "var(--black)",
              color: "var(--white)",
              fontWeight: "bold",
            }}
          >
            Login
          </NavLink>
          <NavLink
            onClick={toggleNav}
            to="/signup"
            activeStyle={{
              backgroundColor: "var(--black)",
              color: "var(--white)",
              fontWeight: "bold",
            }}
          >
            {" "}
            Sign Up
          </NavLink>
        </div>
      </nav>
    </StyledHeader>
  );
}
