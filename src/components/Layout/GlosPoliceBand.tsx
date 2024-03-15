import { BannerColour } from "./BannerColour";
import { Footer } from "./Footer";
import { FooterContainer } from "./FooterContainer";
import { HeaderContainer } from "./HeaderContainer";
import { Navigation } from "./Navigation";

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
