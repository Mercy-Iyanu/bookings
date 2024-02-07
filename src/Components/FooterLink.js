import React from 'react';
import '../App.css';
import styled from 'styled-components';

const StyledLink = styled.div`
    text-decoration: none;
`;


export default function FooterLink({ text }) {
    return (
        <StyledLink>
            <a href='#'>{text || 'Countries'}</a>
        </StyledLink>
    )
}
