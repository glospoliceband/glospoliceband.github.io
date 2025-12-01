import Script from "next/script";
import { PropsWithChildren } from "react";

export const FacebookProvider = ({ children }: PropsWithChildren<{}>) => (
  <>
    <div id="fb-root"></div>
    <Script src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v24.0" />
    {children}
  </>
);
