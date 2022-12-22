import * as React from 'react';
import { MDXProvider } from "@mdx-js/react"

import * as layoutStyles from "./layout.module.css"
import Navigation from './navigation';
import { IcTypography } from '@ukic/react';

export const Layout = ({ children, pageContext }) => {
    return (
        <MDXProvider
        components={{
            h1: props => <IcTypography variant="h1" className="text-content" applyVerticalMargins {...props} />,
            h2: props => <IcTypography variant="h2" className="text-content" applyVerticalMargins {...props} />,
            h3: props => <IcTypography variant="h3" className="text-content" applyVerticalMargins {...props} />,
            h4: props => <IcTypography variant="h4" className="text-content" applyVerticalMargins {...props} />,
            h5: props => <IcTypography variant="h5" className="text-content" applyVerticalMargins {...props} />,
            h6: props => <IcTypography variant="h6" className="text-content" applyVerticalMargins {...props} />,
            p: props => <IcTypography variant="body" className="text-content" applyVerticalMargins {...props} />
        }}
      >
              <Navigation appTitle='The Band of the Glouestershire Constabulary' status='production' version='1.0' />
            <main>
                <IcTypography variant="h1">Hello World - {pageContext.frontmatter.title}</IcTypography>
                {children}
            </main>
        </MDXProvider>
    )
}

