import React from 'react'

export default function SectionHeading({ text }) {
    return (
        <div>
            <p className='h3'>{text || 'Stay at our top unique properties'}</p>
        </div>
    )
}
