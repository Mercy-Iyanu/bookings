import React from 'react';

export default function Destination() {
    return (
        <div>
            <div className='section-heading'>
                <p className='h3'>Trending destinations</p>
                <p className='h6'>Most popular choices for travelers from Nigeria</p>
            </div>
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
