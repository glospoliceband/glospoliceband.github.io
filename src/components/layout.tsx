import * as React from 'react';
import { MDXProvider } from "@mdx-js/react"

import "./layout.css";
import { IcFooter, IcLink, IcNavigationItem, IcSectionContainer, IcTopNavigation, IcTypography } from '@ukic/react';
import { Link as GatsbyLink } from "gatsby";

import { WrappedAlert, WrappedBlockquote, WrappedCode, WrappedH1, WrappedH2, WrappedH3, WrappedH4, WrappedLi, WrappedLink, WrappedP } from './wrappers';

import { FindUsOnFacebook } from '../images/FindUsOnFacebook';

const shortcodes = {
    h1: WrappedH1,
    h2: WrappedH2,
    h3: WrappedH3,
    h4: WrappedH4,
    p: WrappedP,
    a: WrappedLink,
    li: WrappedLi,
    inlineCode: WrappedCode,
    IcAlert: WrappedAlert,
    blockquote: WrappedBlockquote,
};

const NavigationItem: React.FC<any> = ({ text, to, activeClassName, partiallyActive }) => (
    <IcNavigationItem slot="navigation">
        <GatsbyLink slot="navigation-item" to={to} activeClassName={activeClassName} partiallyActive={partiallyActive} >
            {text}
        </GatsbyLink>
    </IcNavigationItem>
);

interface MainProps {
    children?: React.ReactNode;
};

const Header: React.FC = () => (
    <header className='header-container'>
        <IcTopNavigation
            appTitle='The Band of the Gloucestershire Constabulary'
            href='/'
        >
            <NavigationItem key='homepage' text='Home' to='/' activeClassName='active' partiallyActive={true} />
            <NavigationItem key='engagements' text='Engagements' to='/engagements' activeClassName='active' partiallyActive={true} />
            <NavigationItem key='cdinfo' text='CD Info' to='/cdinfo' activeClassName='active' partiallyActive={true} />
            <NavigationItem key='music' text='Music' to='/music' activeClassName='active' partiallyActive={true} />
        </IcTopNavigation>
    </header>
);


const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <main id="main" className="main-container">
            <IcSectionContainer className='main-content' aligned="center" fullHeight>
                {children}
            </IcSectionContainer>
        </main>
    );
}

const Footer: React.FC = () => {
    return (
        <footer className="footer-container">
            <IcFooter
                copyright={false}
                aligned='full-width'
                breakpoint='extra large'
            >
                <span slot='description' className='footer-description'>
                    <IcTypography className='footer-contact'>For more infomation about the Band or to make a booking enquiry, please contact us at <IcLink href="mailto:secretary@glospoliceband.org">secretary@glospoliceband.org</IcLink></IcTypography>
                    <IcLink className='footer-facebook' href="https://www.facebook.com/glospoliceband"><FindUsOnFacebook /></IcLink>
                </span>
                <span slot='caption' className="footer-caption">
                    <IcTypography className='footer-webadmin'>Comments or issues with this website please contact <IcLink href="mailto:webadmin@glospoliceband.org">webadmin@glospoliceband.org</IcLink>.</IcTypography>
                    <IcTypography className='footer-copyright'
                        variant="label-uppercase">
                        &copy; The Band of the Gloucestershire Constabulary 2023
                    </IcTypography>
                </span>
                <span slot='logo'>
                </span>
            </IcFooter>
        </footer>);
}

export const Layout: React.FC<MainProps> = ({ children }) => {
    return (
        <MDXProvider components={shortcodes}>
            <Header />
            <Main >
                {children}
            </Main>
            <Footer />
        </MDXProvider>
    )
}

