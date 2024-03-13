import * as React from "react";

import musicDatabase from "@/data/band_library_2023-09.json";

export const Music = () => (
  <table className="table-auto">
    <thead>
      <tr>
        <th>Number</th>
        <th>Title</th>
        <th>Composer</th>
        <th className="hidden md:block">Notes</th>
      </tr>
    </thead>
    <tbody>
      {musicDatabase.map((piece, key) => (
        <tr key={key}>
          <td>
            <p>{piece.number}</p>
          </td>
          <td>
            <p>{piece.title}</p>
          </td>
          <td>
            <p>{piece.composer}</p>
            {piece.arranger && <p>Arr: {piece.arranger}</p>}
          </td>
          <td className="hidden md:block">
            <p>{piece.notes}</p>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
