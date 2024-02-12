import { Footer } from "./footer";
import { Navigation } from "./navigation";

const BannerColour = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => (
  <div className="border-t border-gray-200 shadow p-6 bg-botgc text-gray-100">
    {children}
  </div>
);

const HeaderContainer = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => (
  <div className="relative z-20 container mx-auto max-w-7xl p-4">
    {children}
  </div>
);

const FooterContainer = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => (
  <div className="w-full z-20 container mx-auto max-w-7xl p-4">{children}</div>
);

export const GlosPoliceBand = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div className="flex flex-col min-h-screen">
    <header>
      <HeaderContainer>
        <BannerColour>
          <Navigation />
        </BannerColour>
      </HeaderContainer>
    </header>
    <main className="container mx-auto px-4 pt-6 pb-20 h-full max-w-6xl prose flex-auto">
      {children}
    </main>
    <footer>
      <FooterContainer>
        <BannerColour>
          <Footer />
        </BannerColour>
      </FooterContainer>
    </footer>
  </div>
);
