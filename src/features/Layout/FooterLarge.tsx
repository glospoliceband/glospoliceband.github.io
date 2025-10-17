import { Contact } from "./Contact";
import { Copyright } from "./Copyright";
import { Facebook } from "./Facebook";

export const FooterLarge = () => (
  <div className="w-full flex flex-row items-center justify-between">
    <Facebook />
    <span className="text-sm sm:text-center">
      <Contact />
      <Copyright />
    </span>
  </div>
);
