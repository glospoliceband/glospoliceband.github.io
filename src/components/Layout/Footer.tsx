import Link from "next/link";

import { Copyright } from "./Copyright";
import { Facebook } from "./Facebook";
import { Contact } from "./Contact";
import { FooterLarge } from "./FooterLarge";
import { FooterSmall } from "./FooterSmall";

export const Footer = () => (
  <>
    <div className="hidden sm:block">
      <FooterLarge />
    </div>
    <div className="block sm:hidden">
      <FooterSmall />
    </div>
  </>
);
