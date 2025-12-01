"use client";

import { FacebookFeed } from "../Facebook";

import { GlosPoliceBand_20251011 } from "@/features/Images";

import { MainPageIntro } from "./MainPageIntro";
import { MainPageText } from "./MainPageText";

export const MainPage = () => (
  <>
    <h1>Gloucestershire Police Band</h1>
    <MainPageIntro />
    <GlosPoliceBand_20251011 />
    <div className="grid lg:grid-cols-3 lg:gap-4">
      <div className="lg:col-span-2">
        <MainPageText />
      </div>
      <div>
        <FacebookFeed />
      </div>
    </div>
  </>
);
