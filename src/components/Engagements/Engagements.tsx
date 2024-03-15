"use client";

import React from "react";
import { useEffect, useState } from "react";

import type { MuzodoEvent } from "./MuzodoEvent";

import { EngagementsTable } from "./EngagementsTable";
import { EngagementsList } from "./EngagementsList";

const fetchData = async (
  setData: (data: MuzodoEvent[]) => void,
  setError: (error: string) => void,
  setLoading: (loading: boolean) => void,
) => {
  fetch(
    `https://www.muzodo.com/api/v1/group/BA71404D-C196-A266-2BBF-0A6C705FDB4C/events?displayFrom`,
  )
    .then((res) => res.json())
    .then(
      (result) => {
        if (result.Status) {
          setError(result.Message);
          setLoading(false);
        } else {
          setData(result);
          setLoading(false);
        }
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setError(error);
        setLoading(false);
      },
    );
};

export const Engagements = () => {
  const [data, setData] = useState([] as MuzodoEvent[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData(setData, setError, setLoading);
  }, []);

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="block md:hidden">
        <EngagementsList engagements={data} />
      </div>
      <div className="hidden md:block">
        <EngagementsTable engagements={data} />
      </div>
    </>
  );
};
