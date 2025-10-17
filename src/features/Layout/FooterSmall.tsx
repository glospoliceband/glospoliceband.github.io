import { Contact } from "./Contact";
import { Copyright } from "./Copyright";
import { Facebook } from "./Facebook";

export const FooterSmall = () => (
  <div className="w-full flex flex-col items-left justify-between">
    <Facebook />
    <span className="text-sm sm:text-center">
      <Contact />
      <Copyright />
    </span>
  </div>
);
