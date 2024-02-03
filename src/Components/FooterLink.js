import React from 'react';
import '../App.css';
import styled from 'styled-components';

export default function FooterLink({ text }) {
    return (
        <div>
            <a href='#'>{text || 'Countries'}</a>
        </div>
    )
}
