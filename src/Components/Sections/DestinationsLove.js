import React from 'react';
import BiharList from '../BiharList';
import BiharProperties from '../BiharProperties';

export default function DestinationsLove() {
    return (
        <div>
            <table>
                <tr>
                    <td>
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
                    </td>
                    <td>
                        <ul>
                            <li>
                                <BiharList text='Lake District' />
                                <BiharProperties text='2,412 properties' />
                            </li>
                            <li>
                                <BiharList text='England' />
                                <BiharProperties text='74,142 properties' />
                            </li>
                            <li>
                                <BiharList text='Texel' />
                                <BiharProperties text='410 properties' />
                            </li>
                            <li>
                                <BiharList text='Santorini' />
                                <BiharProperties text='1,765 properties' />
                            </li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>
                                <BiharList text='Phuket Province' />
                                <BiharProperties text='5,497 properties' />
                            </li>
                            <li>
                                <BiharList text='Ibiza' />
                                <BiharProperties text='1,641 properties' />
                            </li>
                            <li>
                                <BiharList text='Uttar Pradesh' />
                                <BiharProperties text='4,400 properties' />
                            </li>
                            <li>
                                <BiharList text='Zanzibar' />
                                <BiharProperties text='839 properties' />
                            </li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>
                                <BiharList text='Tenerife' />
                                <BiharProperties text='9,615 properties' />
                            </li>
                            <li>
                                <BiharList text='Cornwall' />
                                <BiharProperties text='5,297 properties' />
                            </li>
                            <li>
                                <BiharList text='Bora Bora' />
                                <BiharProperties text='59 properties' />
                            </li>
                            <li>
                                <BiharList text='Jersey' />
                                <BiharProperties text='89 properties' />
                            </li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>
                                <BiharList text='Mykonos' />
                                <BiharProperties text='1,454 properties' />
                            </li>
                            <li>
                                <BiharList text='Isle of Wight' />
                                <BiharProperties text='937 properties' />
                            </li>
                            <li>
                                <BiharList text='Ras Al Khaimah' />
                                <BiharProperties text='59 properties' />
                            </li>
                            <li></li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
    )
}
