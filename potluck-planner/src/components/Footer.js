import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';




const Line = styled.hr`
    
    margin-left: 15%;
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid black;
`



const StyledFooter = styled.div`
    width: 100%;
   
    background-color:  var(--white);
    padding-top: 0;
    padding-bottom: 0;
    text-align: right;
    padding-right: 15%;
   
    height: calc(var(--nav-height)*2);
        a{
            padding-right: 5%;
            padding-top: .5%;
            display:inline-block;
            text-decoration:none;
            color: black;

        }

`





export default function Footer() {
    return (
        <StyledFooter>
        <div className='footerLinks'>
            <Line />
            
            <Link to='/team'>Meet the Team</Link>
        </div>
        </StyledFooter>
    )
}
