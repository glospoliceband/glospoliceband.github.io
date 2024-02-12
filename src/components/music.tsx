"use client";

import { Disclosure } from "@headlessui/react";
import * as React from "react";

import musicDatabase from "@/data/band_library_2017-10-15.json";

const MusicTable = () => (
  <table className="music-table">
    <thead>
      <tr className="music-table-header">
        <th>Number</th>
        <th>Title</th>
        <th>Composer</th>
        <th>Notes</th>
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
          <td>
            <p>{piece.notes}</p>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const MusicList = () => (
  <ul>
    {musicDatabase.map((piece, key) => (
      <li key={key}>
        <Disclosure>
          <Disclosure.Button className="py-2">
            {piece.number} - {piece.title}
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            <p>{piece.composer}</p>
            {piece.arranger && <p>Arr: {piece.arranger}</p>}
            <p>{piece.notes}</p>
          </Disclosure.Panel>
        </Disclosure>
      </li>
    ))}
  </ul>
);

export const Music = () => {
  return (
    <>
      <div className="block md:hidden">
        <MusicList />
      </div>
      <div className="hidden md:block">
        <MusicTable />
      </div>
    </>
  );
};
