import React from 'react';
import '../App.css';

export default function Property() {
    return (
        <div>
            <div className='section-heading'>
                <p className='h3'>Browse by property type</p>
            </div>
            <table className='table'>
                <tr>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/hotel.jpeg'} alt='Man with his kids' className='img-fluid property-image' />
                    </td>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/apartment.jpeg'} alt='Man with his kids' className='img-fluid property-image' />
                    </td>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/resort.jpeg'} alt='Man with his kids' className='img-fluid property-image' />
                    </td>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/villa.jpeg'} alt='Man with his kids' className='img-fluid property-image' />
                    </td>
                </tr>
            </table>
        </div>
    )
}
