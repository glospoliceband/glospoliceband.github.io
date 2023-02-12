import * as React from 'react';

import musicDatabase from '../data/band_library_2017-10-15.json';

import { Typography } from './typography.tsx';

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
                            <Typography variant='body'>
                                {piece.number}
                            </Typography>
                        </td>
                        <td className='music-table-title'>
                            <Typography variant='body'>
                                {piece.title}
                            </Typography>
                        </td>
                        <td className='music-table-composer'>
                            <Typography>{piece.composer}</Typography>
                            {piece.arranger &&
                                <Typography>Arr: {piece.arranger}</Typography>
                            }
                        </td>
                        <td className='music-table-notes'>
                            <Typography>
                                {piece.notes}
                            </Typography>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
