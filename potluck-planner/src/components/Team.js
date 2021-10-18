import React from 'react'
import styled from 'styled-components';


const StyledHeader = styled.div`    
    
    h1{
        font-size: 2rem;
    }
    .header{
        padding: 1%;
        background-color: #CB997E;
        margin-bottom: 0;
    }

`

const StyledCards = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-wrap: wrap;
    background-color: #B7B7A4;
.card{
    width: 25%;
    background-color: #FFE8D6;
    border-radius: 10%;
    margin: 1%;

    img{
        width: 50%;
        border-radius: 10%;
        margin-top: 3%;
    }
 
    h2{
        font-size: 1rem;
    }
}


`


export default function Team() {
    return(
        <team>
            <StyledHeader>
            <div className="header">
                <h1>Meet the Team!</h1>
            </div>  
            </StyledHeader>

            <div className = 'main'>
            <StyledCards>
                
                <div className = 'card'>
                    <img
                        className='card-photo'
                        src="https://ca.slack-edge.com/ESZCHB482-U022J6ZTV97-b654dcf6572d-512"
                        alt='Photo of Richard Perry'
                    />
                        <h2>Richard Perry</h2>
                        <p>Backend Development</p>
                </div>

                <div className = 'card'>
                    <img
                        classNames = 'card-photo'
                        src="https://ca.slack-edge.com/ESZCHB482-U027EG8DCH3-9d69e6a9d3b6-512"
                        alt='Photo of Jared Hall'
                    />
                        <h2>Jared Hall</h2>
                        <p>Backend Development</p>
                </div>

                <div className='card'>
                    <img
                        className = 'card-photo'
                        src="https://ca.slack-edge.com/ESZCHB482-U022J856RJ5-ec2e92843ae6-512"
                        alt='Photo of Rick Mansfield'
                    />
                        <h2>Rick Mansfield</h2>
                        <p>Backend Development</p>

                </div>

                <div className='card'>
                    <img
                        className = 'card-photo'
                        src="https://ca.slack-edge.com/ESZCHB482-U02BKV6HY72-2d68c42b0aaf-512"
                        alt='Photo of Erik Bahena'
                    />
                        <h2>Erik Bahena</h2>
                        <p>Frontend Development</p>
                </div>

                <div className='card'>
                    <img
                        className = 'card-photo'
                        src="https://ca.slack-edge.com/ESZCHB482-U025153BPJN-ef39da67b12d-512"
                        alt='Photo of Collyn Godlewski'
                    />
                        <h2>Collyn Godlewski</h2>
                        <p>Frontend Development</p>
                </div>
                
                </StyledCards>
            </div>
        </team>

    )}

