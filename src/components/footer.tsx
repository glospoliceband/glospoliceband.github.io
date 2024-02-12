import Link from "next/link";
import { FindUsOnFacebook } from "./images";

const Copyright = () => (
  <p>
    © {new Date().getFullYear()}{" "}
    <Link href="/" className="hover:underline">
      The Band of the Gloucestershire Constabulary
    </Link>
    .
  </p>
);

const Facebook = () => (
  <span className="text-sm sm:text-center">
    <a href="https://www.facebook.com/glospoliceband">
      <FindUsOnFacebook />
    </a>
  </span>
);

const Contact = () => (
  <p>
    Contact:{" "}
    <a href="mailto:secretary@glospoliceband.org" className="hover:underline">
      secretary@glospoliceband.org
    </a>
  </p>
);

const FooterLarge = () => (
  <div className="w-full flex flex-row items-center justify-between">
    <Facebook />
    <span className="text-sm sm:text-center">
      <Contact />
      <Copyright />
    </span>
  </div>
);

const FooterSmall = () => (
  <div className="w-full flex flex-col items-left justify-between">
    <Facebook />
    <span className="text-sm sm:text-center">
      <Contact />
      <Copyright />
    </span>
  </div>
);

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
