import * as React from 'react';
import { MDXProvider } from "@mdx-js/react"

import "./layout.css";
import Navigation from './navigation';
import { IcFooter, IcFooterLink, IcSectionContainer, IcTypography } from '@ukic/react';
import { Footer } from './footer';
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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

            <header className='header'>
                <Navigation appTitle='The Band of the Glouestershire Constabulary' />
            </header>

            <main id="main" className="main-container">
                <IcSectionContainer className='main-content' aligned="center" fullHeight>
                    {children}
                </IcSectionContainer>
            </main>

            <footer className="footer">
                <IcFooter
                    copyright={false}
                >
                    <span slot='description'>
                        <IcTypography>For more infomation about the Band or to make a booking enquiry, please contact us at <IcFooterLink href="mailto:secretary@glospoliceband.org">secretary@glospoliceband.org</IcFooterLink></IcTypography>
                        <IcTypography>Find us on Facebook: <IcFooterLink href="https://www.facebook.com/glospoliceband">https://www.facebook.com/glospoliceband</IcFooterLink></IcTypography>
                        <IcTypography>Comments or issues with this website please contact <IcFooterLink href="mailto:webadmin@glospoliceband.org">webadmin@glospoliceband.org</IcFooterLink>.</IcTypography>
                    </span>
                    <span slot="caption" className="footer-copyright">
                        <IcTypography
                            variant="label-uppercase">
                            &copy; The Band of the Gloucestershire 2022
                        </IcTypography>
                    </span>
                </IcFooter>            </footer>
        </MDXProvider>
    )
}

