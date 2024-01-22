import React from 'react';
import '../App.css';

export default function Offers() {
    return (
        <div>
            <div className='section-heading'>
                <p className='h3'>Offers</p>
                <p className='h6'>Promotions, deals, and special offers for you</p>
            </div>
            <table>
                <tr>
                    <td>
                        <div className='card'>
                            <div className='card-body'>
                                <table className='table'>
                                    <tr>
                                        <td className='col-md-8'>
                                            <p className='h4 card-title'>Take your longest vacation yet</p>
                                            <p className='card-text'>Browse properties offering long-term stays, many at reduced monthly rates.</p>
                                            <a href='#' className='btn btn-primary'>Find a stay</a>
                                        </td>
                                        <td className='col-md-4'>
                                            <img src={process.env.PUBLIC_URL + './images/offers.jpeg'} alt='Man with his kids' className='img-fluid' />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className='card new-adventure'>
                            <div className='card-body'>
                                <p className='h4 card-title'>New year, new adventures</p>
                                <p className='card-text'>Save 15% or more when you book and stay before April 1, 2024</p>
                                <a href='#' className='btn btn-primary'>Find Early 2024 Deals</a>
                            </div>
                        </div>
                    </td>
                </tr>

            </table>


        </div>
        </div >
        </div >
    )
}  