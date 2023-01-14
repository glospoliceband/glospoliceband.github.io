import * as React from 'react';
import { MDXProvider } from "@mdx-js/react"

import "./layout.css";
import { IcAlert, IcFooter, IcLink, IcNavigationItem, IcSectionContainer, IcTheme, IcTopNavigation, IcTypography } from '@ukic/react';
import { Link as GatsbyLink, PageProps } from "gatsby";
const { slug } = require("github-slugger");

import { FindUsOnFacebook } from '../images/FindUsOnFacebook';

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

const Header: React.FC = () => (<header className='header'>
    <IcTopNavigation
        appTitle='The Band of the Gloucestershire Constabulary'
        href='/'
    >
        <NavigationItem key='homepage' text='Home' to='/' activeClassName='active' partiallyActive={true} />
        <NavigationItem key='engagements' text='Engagements' to='/engagements' activeClassName='active' partiallyActive={true} />
        <NavigationItem key='cdinfo' text='CD Info' to='/cdinfo' activeClassName='active' partiallyActive={true} />
        <NavigationItem key='music' text='Music' to='/music' activeClassName='active' partiallyActive={true} />

    </IcTopNavigation>
</header>);


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
        <footer className="footer">
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

const WrappedH1: React.FC = (props: any) => (
    <IcTypography
        variant="h1"
        apply-vertical-margins
        data-class="heading-extra-large"
    >
        {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
        <h3 {...props} />
    </IcTypography>
);

const WrappedH2: React.FC = (props: any) => (
    <IcTypography variant="h2" apply-vertical-margins data-class="h2">
        {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
        <h4 {...props} />
    </IcTypography>
);


const WrappedH3: React.FC = (props: any) => (
    <IcTypography variant="h3" apply-vertical-margins data-class="h3">
        {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
        <h5 {...props} />
    </IcTypography>
);

const WrappedH4: React.FC = (props: any) => (
    <IcTypography variant="h4" apply-vertical-margins data-class="h4">
        {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
        <h6 {...props} />
    </IcTypography>
);

const WrappedP: React.FC = (props: any) => (
    <IcTypography variant="body" apply-vertical-margins>
        {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
        <p {...props} />
    </IcTypography>
);

// Destructuring props results in those values being undefined?
/* eslint-disable react/destructuring-assignment */
const WrappedLink: React.FC = (props: any) => (
    <IcLink {...props} />
);
/* eslint-enable react/destructuring-assignment */

const WrappedLi: React.FC = (props: any) => (
    <li>
        <IcTypography variant="body">
            <p {...props} />
        </IcTypography>
    </li>
);

const WrappedCode: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <code className="code">{children}</code>
);
const WrappedAlert: React.FC = (props: any) => (
    <IcAlert data-class="alert" announced={false} {...props} />
);

const WrappedBlockquote: React.FC = (props: any) => (
    <blockquote {...props} className="blockquote" />
);

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

