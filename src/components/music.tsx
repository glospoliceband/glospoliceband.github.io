import * as React from 'react';

import { IcTypography } from '@ukic/react';

import musicDatabase from '../data/band_library_2017-10-15.json';

export const MusicTable: React.FC = () => {
    return (
        <table className='music-table'>
            <thead>
                <tr className='music-table-header'>
                    <th>Number</th>
                    <th>Title</th>
                    <th>Composer</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                {musicDatabase.map((piece, key) => (
                    <tr className='music-table-row' key={key}>
                        <td className='music-table-number'>
                            <IcTypography variant='body'>
                                {piece.number}
                            </IcTypography>
                        </td>
                        <td className='music-table-title'>
                            <IcTypography variant='body'>
                                {piece.title}
                            </IcTypography>
                        </td>
                        <td className='music-table-composer'>
                            <IcTypography>{piece.composer}</IcTypography>
                            {piece.arranger &&
                                <IcTypography>Arr: {piece.arranger}</IcTypography>
                            }
                        </td>
                        <td className='music-table-notes'>
                            <IcTypography>
                                {piece.notes}
                            </IcTypography>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
