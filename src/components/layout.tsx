import React from "react"

import { Navbar } from "./navbar";

const Header = ({ slug }) => (
    <header className="relative z-20 container mx-auto max-w-7xl p-4 border-t border-gray-200 shadow p-6 bg-sky-100 text-gray-700">
        <Navbar slug={slug} />
    </header>
);

const Main = ({ children }) => (
    <main className="container mx-auto px-4 pt-6 pb-20 h-full max-w-6xl prose">
        {children}
    </main>
);

const Footer = () => (
    <footer className="fixed bottom-0 left-0 w-full z-20">
        <div className="container mx-auto max-w-7xl p-4 border-t border-gray-200 shadow bg-sky-100 text-gray-700">
            <div className="w-full flex items-center justify-between">
                <span className="text-sm sm:text-center">
                    <p>Contact: <a href="mailto:secretary@glospoliceband.org">secretary@glospoliceband.org</a></p>
                </span>
                <span className="text-sm sm:text-center">
                    <p>© 2023 <a href="https://www.glospoliceband.org/" className="hover:underline">The Band of the Gloucestershire Constabulary</a>.</p>
                </span>
            </div>
        </div>
    </footer>
);

export const Layout = ({ pageContext, children }) => {
    console.log(`Layout: frontmatter=${JSON.stringify(pageContext)}`);
    return (
    <>
        <Header slug={pageContext?.frontmatter?.slug} />
        <Main children={children} />
        <Footer />
    </>
)};
