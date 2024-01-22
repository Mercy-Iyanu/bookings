import React from 'react';
import '../App.css';

export default function Offers() {
    return (
        <div>
            <div className='section-heading'>
                <p className='h3'>Offers</p>
                <p className='h6'>Promotions, deals, and special offers for you</p>
            </div>
            <div className='row no-gutters'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='row no-gutters'>
                            <div className='col-md-8'>
                                <div className='card-body'>
                                    <p className='h4 card-title'>Take your longest vacation yet</p>
                                    <p className='card-text'>Browse properties offering long-term stays, many at reduced monthly rates.</p>
                                    <a href='#' className='btn btn-primary'>Find a stay</a>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <img src={process.env.PUBLIC_URL + './images/offers.jpeg'} alt='Man with his kids' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='card new-adventure'>
                        <div className='card-body'>
                            <p className='h4 card-title'>New year, new adventures</p>
                            <p className='card-text'>Save 15% or more when you book and stay before April 1, 2024</p>
                            <a href='#' className='btn btn-primary'>Find Early 2024 Deals</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}  