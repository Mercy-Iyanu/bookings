import React from 'react';
import SectionHeading from '../SectionHeading';
import SectionSummary from '../SectionSummary';

export default function Planner() {
    return (
        <div>
            <SectionHeading text='Quick and easy trip planner' />
            <SectionSummary text='Pick a vibe and explore the top destinations in Nigeria' />
            <table className='table'>
                <tr>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/lagos.jpg'} alt='Lagos-picture' className='img-fluid ' />
                        <p className='h6'>Lagos</p>
                        <p className='card-text'>10 km away</p>
                    </td>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/ikeja.jpg'} alt='Ikeja-picture' className='img-fluid ' />
                        <p className='h6'>Ikeja</p>
                        <p className='card-text'>19 km away</p>
                    </td>
                    {/* <td></td>
                    <td></td>
                    <td></td>
                    <td></td> */}
                </tr>
            </table>
        </div>
    )
}
