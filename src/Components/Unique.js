import React from 'react';
import SectionHeading from './SectionHeading';
import SectionSummary from './SectionSummary';

export default function Unique() {
    return (
        <div>
            <SectionHeading />
            <SectionSummary />
            <table className='table'>
                <tr>
                    <td>
                        <div className='card'>
                            <img src={process.env.PUBLIC_URL + './images/finland.png'} alt='Finland-picture' className='img-fluid ' />
                            <div className='card-body'>
                                <p className='h4 card-title'>Gyttja Västergårds</p>
                                <p className='card-text'>Finland, Lillandet</p>
                                <p className='card-text'> <span>9.3</span>Wonderful · 207 reviews</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className='card'>
                            <img src={process.env.PUBLIC_URL + './images/germany.png'} alt='Germany-picture' className='img-fluid ' />
                            <div className='card-body'>
                                <p className='h4 card-title'>Waldschenke Stendenitz Übernachten im Wald am See</p>
                                <p className='card-text'>Germany, Neuruppin</p>
                                <p className='card-text'> <span>8.7</span>Excellent · 307 reviews</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className='card'>
                            <img src={process.env.PUBLIC_URL + './images/harbour view.png'} alt='Harbour-picture' className='img-fluid ' />
                            <div className='card-body'>
                                <p className='h4 card-title'>Harbor View</p>
                                <p className='card-text'>United Kingdom, Isle Of Skye</p>
                                <p className='card-text'> <span>9.0</span>Wonderful · 144 reviews</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className='card'>
                            <img src={process.env.PUBLIC_URL + './images/spain.png'} alt='Spain-picture' className='img-fluid ' />
                            <div className='card-body'>
                                <p className='h4 card-title'>Casa rural La Marquesa - Cuenca</p>
                                <p className='card-text'>Spain, Valera de Abajo</p>
                                <p className='card-text'> <span>9.4</span>Wonderful · 57 reviews</p>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}
