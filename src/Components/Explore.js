import React from 'react';
import '../App.css';

export default function Explore() {
    return (
        <div>
            <div className='section-heading'>
                <p className='h3'>Explore Nigeria</p>
                <p className='h6'>These popular destinations have a lot to offer</p>
            </div>
            <table className='table'>
                <tr>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/ikeja.jpg'} alt='Ikeja-picture' className='img-fluid ' />
                        <p className='h6'>Ikeja</p>
                        <p className='card-text'>100 properties</p>
                    </td>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/lagos.jpg'} alt='Lagos-picture' className='img-fluid ' />
                        <p className='h6'>Lagos</p>
                        <p className='card-text'>572 properties</p>
                    </td>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/abuja.jpg'} alt='Abuja-picture' className='img-fluid ' />
                        <p className='h6'>Abuja</p>
                        <p className='card-text'>222 properties</p>
                    </td>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/lekki.jpg'} alt='Lekki-picture' className='img-fluid ' />
                        <p className='h6'>Lekki</p>
                        <p className='card-text'>68 properties</p>
                    </td>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/lekki.jpg'} alt='Ibadan-picture' className='img-fluid ' />
                        <p className='h6'>Ibadan</p>
                        <p className='card-text'>45 properties</p>
                    </td>
                    <td>
                        <img src={process.env.PUBLIC_URL + './images/ikeja.jpg'} alt='Benin-picture' className='img-fluid ' />
                        <p className='h6'>Benin City</p>
                        <p className='card-text'>32 properties</p>
                    </td>
                </tr>
            </table>
        </div>
    )
}
