import React from 'react';
import '../App.css';

export default function BiharProperties({ text }) {
    return (
        <div>
            <p>{text || '764 properties'}</p>
        </div>
    )
}
