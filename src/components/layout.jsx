import * as React from 'react';
import { Link } from 'gatsby';

import * as layoutStyles from "./layout.module.css"

export const Layout = ({ children, pageContext }) => {
    return (
        <div className={layoutStyles.container}>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/engagements">Engagements</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                    <li><Link to="/cdinfo">CD Info</Link></li>
                    <li><Link to="/documents">Documents</Link></li>
                    <li><Link to="/music">Music</Link></li>
                </ul>
            </nav>
            <main>
                <h1>Hello World - {pageContext.frontmatter.title}</h1>
                {children}
            </main>
        </div>
    )
}

