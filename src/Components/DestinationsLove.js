import React from 'react';
import BiharList from './BiharList';
import BiharProperties from './BiharProperties';

export default function DestinationsLove() {
    return (
        <div>
            <ul>
                <li>
                    <BiharList />
                    <BiharProperties />
                </li>
                <li>
                    <BiharList text='Guernsey' />
                    <BiharProperties text='61 properties' />
                </li>
                <li>
                    <BiharList text='Bali' />
                    <BiharProperties text='12,689 properties' />
                </li>
                <li>
                    <BiharList text='Hawaii' />
                    <BiharProperties text='5,519 properties' />
                </li>
            </ul>
        </div>
    )
}
