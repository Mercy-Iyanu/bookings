import React from 'react';
import '../App.css';

export default function BiharList({ text }) {
    return (
        <div>
            <a href='#'>{text || 'Bihar'}</a>
        </div>
    )
}
