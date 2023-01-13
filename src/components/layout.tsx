import * as React from 'react';
import { MDXProvider } from "@mdx-js/react"

import "./layout.css";
import Navigation from './navigation';
import { IcFooter, IcFooterLink, IcLink, IcNavigationItem, IcSectionContainer, IcTopNavigation, IcTypography } from '@ukic/react';
import { Link as GatsbyLink, withPrefix } from "gatsby";

import { StaticImage } from 'gatsby-plugin-image';

const FindUsOnFacebook = () => (<StaticImage src='../images/FindUs-FB-RGB.svg' alt='Find us on Facebook: https://www.facebook.com/glospoliceband' height={30} />);

const NavigationItem: React.FC<any> = ({ text, to, activeClassName, partiallyActive }) => (
    <IcNavigationItem slot="navigation">
        <GatsbyLink slot="navigation-item" to={to} activeClassName={activeClassName} partiallyActive={partiallyActive} >
            {text}
        </GatsbyLink>
    </IcNavigationItem>
);

const Header = () => {
    return (<header className='header'>
        <IcTopNavigation
            appTitle='The Band of the Gloucestershire Constabulary'
            href='/'
        >
            <NavigationItem key='homepage' text='Home' to='/' activeClassName='active' partiallyActive={true} />
            <NavigationItem key='engagements' text='Engagements' to='/engagements' activeClassName='active' partiallyActive={true} />
            <NavigationItem key='cdinfo' text='CD Info' to='/cdinfo' activeClassName='active' partiallyActive={true} />

        </IcTopNavigation>
    </header>);
}

const Main = ({ children, pageContext }) => {
    return (
        <main id="main" className="main-container">
            <IcSectionContainer className='main-content' aligned="center" fullHeight>
                <IcTypography variant='h2'>{pageContext.frontmatter.title}</IcTypography>
                {children}
            </IcSectionContainer>
        </main>
    );
}

const Footer2 = () => {
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

export const Layout = ({ children, pageContext }) => {
    return (
        <MDXProvider
            components={{
                h1: props => <IcTypography variant="h1" className="text-content" applyVerticalMargins {...props} />,
                h2: props => <IcTypography variant="h2" className="text-content" applyVerticalMargins {...props} />,
                h3: props => <IcTypography variant="h3" className="text-content" applyVerticalMargins {...props} />,
                h4: props => <IcTypography variant="h4" className="text-content" applyVerticalMargins {...props} />,
                h5: props => <IcTypography variant="h4" className="text-content" applyVerticalMargins {...props} />,
                h6: props => <IcTypography variant="h4" className="text-content" applyVerticalMargins {...props} />,
                p: props => <IcTypography variant="body" className="text-content" applyVerticalMargins {...props} />
            }}
        >
            <Header />
            <Main pageContext={pageContext}>
                {children}
            </Main>
            <Footer2 />
        </MDXProvider>
    )
}

