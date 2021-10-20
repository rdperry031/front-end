import React from "react";
import styled from "styled-components";

const StyledTeam = styled.div`
  min-height: calc(100vh - 210px - 37.33px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


    @media (max-width: 2070px){
        .cardsContainer{
      

            .card{
                // flex: 0 0 30%;
                img{
                  height: 200px;
                  width: 200px;
                }
            }
        }
    }

    
    @media (max-width: 1330px){
        .cardsContainer{

            .card{
               h2{
                   white-space: nowrap;
               }
                img{
                  height: 100px;
                  width: 100px;
                }
            }
        }
    }





  @media (max-width: 550px) {
    .cardsContainer {
      width: 100%;

      .card {
        padding: 0;
        margin: 0;
        width: 100%;
        margin-top: 3%;
        margin-bottom: 3%;

        img {
          width: 80%;
          height: 80%;
        }
      }
    }
  }
`;

const StyledHeader = styled.div`
  h1 {
    font-size: 3rem;
    line-height: 3.5rem;
  }
  .teamHeader {
    text-align: center;
    margin-top: 10%;
    margin-bottom: 25%;
    padding-bottom: 0.5%;
    background-color: #FFFFF;
    padding-top: 2%;
  }
`;

const StyledCards = styled.div`
    margin: 0 auto;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
    background-color: var(--white);
    
    
.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 2rem;
    
    width: max-content;
    height: 30%;
    margin-top: 1%;
    border: none;
    

    img{
        height: 350px;
        width: 350px;
        border-radius: 5%;
       
    }
 
    h2{
        margin-top: 1.5%;
        padding: 1%;
        font-size: 1.5rem;
    }
    p{
        padding: 2%;
        font-size: 1rem;
        width: max-content;
        padding-bottom: 1%;
    }
    }

}
`;

export default function Team() {
  return (
    <StyledTeam>
      <StyledHeader>
        <div className="teamHeader">
          <h1>Meet the Team!</h1>
        </div>
      </StyledHeader>

      <div></div>
      <StyledCards className="cardsContainer">
        <div className="card">
          <img
            className="card-photo"
            src="https://ca.slack-edge.com/ESZCHB482-U022J6ZTV97-b654dcf6572d-512"
            alt="Photo of Richard Perry"
          />
          <h2>Richard Perry</h2>
          <p>Frontend Development</p>
        </div>

        <div className="card">
          <img
            classNames="card-photo"
            src="https://ca.slack-edge.com/ESZCHB482-U027EG8DCH3-9d69e6a9d3b6-512"
            alt="Photo of Jared Hall"
          />
          <h2>Jared Hall</h2>
          <p>Frontend Development</p>
        </div>

        <div className="card">
          <img
            className="card-photo"
            src="https://ca.slack-edge.com/ESZCHB482-U022J856RJ5-ec2e92843ae6-512"
            alt="Photo of Rick Mansfield"
          />
          <h2>Rick Mansfield</h2>
          <p>Backend Development</p>
        </div>

        <div className="card">
          <img
            className="card-photo"
            src="https://ca.slack-edge.com/ESZCHB482-U02BKV6HY72-2d68c42b0aaf-512"
            alt="Photo of Erik Bahena"
          />
          <h2>Erik Bahena</h2>
          <p>Frontend Development</p>
        </div>

        <div className="card">
          <img
            className="card-photo"
            src="https://ca.slack-edge.com/ESZCHB482-U025153BPJN-ef39da67b12d-512"
            alt="Photo of Collyn Godlewski"
          />
          <h2>Collyn Godlewski</h2>
          <p>Frontend Development</p>
        </div>
      </StyledCards>
    </StyledTeam>
  );
}
