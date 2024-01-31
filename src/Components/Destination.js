import React from 'react';
import SectionHeading from './SectionHeading';
import SectionSummary from './SectionSummary';

export default function Destination() {
    return (
        <div>
            <SectionHeading text='Trending destinations' />
            <SectionSummary text='Most popular choices for travelers from Nigeria' />
            <table className='table'>
                <tr>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/lagos.jpg'} alt='Man with his kids' className='img-fluid ' />
                    </td>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/abuja.jpg'} alt='Man with his kids' className='img-fluid ' />
                    </td>
                </tr>

            </table>
            <table className='table'>
                <tr>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/ikeja.jpg'} alt='Man with his kids' className='img-fluid ' />
                    </td>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/lekki.jpg'} alt='Man with his kids' className='img-fluid ' />
                    </td>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/london.jpg'} alt='Man with his kids' className='img-fluid ' />
                    </td>
                </tr>
            </table>
        </div>
    )
}
