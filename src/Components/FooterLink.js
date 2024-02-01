import React from 'react';
import '../App.css';

export default function FooterLink({ text }) {
    return (
        <div>
            <a href='#'>{text || 'Countries'}</a>
        </div>
    )
}
