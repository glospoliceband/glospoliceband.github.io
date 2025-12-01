import Script from "next/script";
import { ReactNode } from "react";

interface FacebookProviderProperties {
  children: ReactNode;
}

export const FacebookProvider = ({ children }: FacebookProviderProperties) => (
  <>
    <div id="fb-root" />
    <Script src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v24.0" />
    {children}
  </>
);
