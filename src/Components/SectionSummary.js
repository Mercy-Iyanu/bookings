import React from 'react';

export default function SectionSummary({ text }) {
    return (
        <div>
            <p className='h6'>{text || 'From castles and villas to boats and igloos, we have it all'}</p>
        </div>
    )
}
