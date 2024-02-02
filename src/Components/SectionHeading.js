import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.div`

`

export default function SectionHeading({ text }) {
    return (
        <StyledLink>
            <p className='h3'>{text || 'Stay at our top unique properties'}</p>
        </StyledLink>
    )
}
