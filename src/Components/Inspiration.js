import React from 'react';
import '../App.css';

export default function Inspiration() {
    return (
        <div>
            <div className='section-heading'>
                <p className='h3'>Get inspiration for your next trip</p>
                <p className='h6'>More</p>
            </div>
            <table className='table'>
                <tr>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/orlando hotel.png'} alt='Orlando-picture' className='img-fluid ' />
                        <p className='h6'>The 6 best Orlando hotels for families</p>
                        <p className='card-text'>Discover the best Orlando hotels for families for your vacation.</p>
                    </td>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/skii towns.png'} alt='Skii-picture' className='img-fluid ' />
                        <p className='h6'>5 best ski towns around the world</p>
                        <p className='card-text'>Discover a winter wonderland in these charming ski destinations.</p>
                    </td>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/vacation homes.png'} alt='Vacation-picture' className='img-fluid ' />
                        <p className='h6'>5 vacation homes for a Thanksgiving getaway</p>
                        <p className='card-text'>Enjoy Thanksgiving dinner at these vacation homes.</p>
                    </td>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/bangkok.png'} alt='Bangkok-picture' className='img-fluid ' />
                        <p className='h6'>6 incredible Bangkok rooftop bars</p>
                        <p className='card-text'>Amazing city views, cocktails, and world-class cuisine.</p>
                    </td>
                </tr>
            </table>
        </div>
    )
}
