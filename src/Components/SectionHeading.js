import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.div`
    margin: 0;
    font-size: 2px;
`;

export default function SectionHeading({ text }) {
    return (
        <StyledLink>
            <span className='h3'> {text || 'Stay at our top unique properties'} </span>
        </StyledLink>
    )
}
