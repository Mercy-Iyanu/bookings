import React from 'react';
import SectionHeading from './SectionHeading';
import SectionSummary from './SectionSummary';

export default function Guest() {
    return (
        <div>
            <SectionHeading text='Homes guests love' />
            <SectionSummary text='Discover homes' />
            <table className='table'>
                <tr>
                    <td>
                        <div className='card'>
                            <img src={process.env.PUBLIC_URL + './images/ikeja.jpg'} alt='Ikeja-picture' className='img-fluid ' />
                            <div className='card-body'>
                                <p className='h4 card-title'>Aparthotel Stare Miasto</p>
                                <p className='card-text'>Old Town, Poland, Kraków</p>
                                <p className='card-text'> <span>8.7</span>Excellent · 2,645 reviews</p>
                                <p className='card-text'>Starting from NGN 95,707</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className='card'>
                            <img src={process.env.PUBLIC_URL + './images/ikeja.jpg'} alt='Ikeja-picture' className='img-fluid ' />
                            <div className='card-body'>
                                <p className='h4 card-title'>Leman Locke</p>
                                <p className='card-text'>Tower Hamlets, United Kingdom, London</p>
                                <p className='card-text'> <span>8.8</span>Excellent · 1,317 reviews</p>
                                <p className='card-text'>Starting from NGN 192,857</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className='card'>
                            <img src={process.env.PUBLIC_URL + './images/ikeja.jpg'} alt='Ikeja-picture' className='img-fluid ' />
                            <div className='card-body'>
                                <p className='h4 card-title'>3 Epoques Apartments by Adrez Living</p>
                                <p className='card-text'>Prague 1, Czech Republic, Praha 1</p>
                                <p className='card-text'> <span>8.7</span>Excellent · 533 reviews</p>
                                <p className='card-text'>Starting from NGN 60,660</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className='card'>
                            <img src={process.env.PUBLIC_URL + './images/ikeja.jpg'} alt='Ikeja-picture' className='img-fluid ' />
                            <div className='card-body'>
                                <p className='h4 card-title'>7Seasons Apartments Budapest</p>
                                <p className='card-text'>06. Terézváros, Hungary, Budapest</p>
                                <p className='card-text'> <span>8.8</span>Excellent · 9,851 reviews</p>
                                <p className='card-text'>Starting from NGN 54,861</p>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}
