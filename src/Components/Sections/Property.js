import React from 'react';
import SectionHeading from '../SectionHeading';

export default function Property() {
    return (
        <div>
            <SectionHeading text='Browse by property type' />
            <table className='table'>
                <tr>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/hotel.jpeg'} alt='Man with his kids' className='img-fluid property-image' />
                        <p className='h6'>Hotels</p>
                    </td>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/apartment.jpeg'} alt='Man with his kids' className='img-fluid property-image' />
                        <p className='h6'>Apartments</p>
                    </td>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/resort.jpeg'} alt='Man with his kids' className='img-fluid property-image' />
                        <p className='h6'>Resort</p>
                    </td>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/villa.jpeg'} alt='Man with his kids' className='img-fluid property-image' />
                        <p className='h6'>Villas</p>
                    </td>
                </tr>
            </table>
        </div>
    )
}
