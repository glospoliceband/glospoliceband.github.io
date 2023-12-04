import React, { PropsWithChildren } from "react";
import type { PageProps } from "gatsby";

import { NavigationBar, NavigationMenu } from "./navigation";
import { FindUsOnFacebook } from "./images";

interface NoProps {}

interface HeaderProps {
  slug: string;
}

const BannerColour = ({ children }: PropsWithChildren<NoProps>) => (
  <div className="border-t border-gray-200 shadow p-6 bg-botgc text-gray-100">
    {children}
  </div>
);

const HeaderContainer = ({ children }: PropsWithChildren<NoProps>) => (
  <div className="relative z-20 container mx-auto max-w-7xl p-4">
    {children}
  </div>
);

const FooterContainer = ({ children }: PropsWithChildren<NoProps>) => (
  <div className="w-full z-20 container mx-auto max-w-7xl p-4">{children}</div>
);

const HeaderLarge = ({ slug }: HeaderProps) => (
  <HeaderContainer>
    <BannerColour>
      <NavigationBar slug={slug} />
    </BannerColour>
  </HeaderContainer>
);

const HeaderSmall = ({ slug }: HeaderProps) => (
  <HeaderContainer>
    <BannerColour>
      <NavigationMenu slug={slug} />
    </BannerColour>
  </HeaderContainer>
);

const FooterLarge = () => (
  <FooterContainer>
    <BannerColour>
      <div className="w-full flex flex-row items-center justify-between">
        <span className="text-sm sm:text-center">
          <a href="https://www.facebook.com/glospoliceband">
            <FindUsOnFacebook />
          </a>
        </span>
        <span className="text-sm sm:text-center">
          <p>
            Contact:{" "}
            <a
              href="mailto:secretary@glospoliceband.org"
              className="hover:underline"
            >
              secretary@glospoliceband.org
            </a>
          </p>
          <p>
            © 2023{" "}
            <a
              href="https://www.glospoliceband.org/"
              className="hover:underline"
            >
              The Band of the Gloucestershire Constabulary
            </a>
            .
          </p>
        </span>
      </div>
    </BannerColour>
  </FooterContainer>
);

const FooterSmall = () => (
  <FooterContainer>
    <BannerColour>
      <div className="w-full flex flex-col items-left justify-between">
        <span className="text-sm sm:text-center">
          <a href="https://www.facebook.com/glospoliceband">
            <FindUsOnFacebook />
          </a>
        </span>
        <span className="text-sm sm:text-center">
          <p>
            Contact:{" "}
            <a
              href="mailto:secretary@glospoliceband.org"
              className="hover:underline"
            >
              secretary@glospoliceband.org
            </a>
          </p>
          <p>
            © 2023{" "}
            <a
              href="https://www.glospoliceband.org/"
              className="hover:underline"
            >
              The Band of the Gloucestershire Constabulary
            </a>
            .
          </p>
        </span>
      </div>
    </BannerColour>
  </FooterContainer>
);

const Main = ({ children }: PropsWithChildren<NoProps>) => (
  <main className="container mx-auto px-4 pt-6 pb-20 h-full max-w-6xl prose">
    {children}
  </main>
);

interface Frontmatter {
  slug: string;
}
interface PageContext {
  frontmatter: Frontmatter;
}

export const Layout = ({
  pageContext,
  children,
}: PageProps<object, PageContext>) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <div className="hidden sm:block">
          <HeaderLarge slug={pageContext?.frontmatter?.slug} />
        </div>
        <div className="block sm:hidden">
          <HeaderSmall slug={pageContext?.frontmatter?.slug} />
        </div>
      </header>
      <main className="flex-auto">
        <Main children={children} />
      </main>
      <footer>
        <div className="hidden sm:block">
          <FooterLarge />
        </div>
        <div className="block sm:hidden">
          <FooterSmall />
        </div>
      </footer>
    </div>
  );
};
