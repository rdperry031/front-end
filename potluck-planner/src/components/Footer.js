import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledFooter = styled.div`
background-color:  #CB997E;
padding: 2%;
text-align: right;
padding-right: 35%;
`





export default function Footer() {
    return (
        <StyledFooter>
        <div>
            <Link to='/team'>Meet the Team</Link>
        </div>
        </StyledFooter>
    )
}
