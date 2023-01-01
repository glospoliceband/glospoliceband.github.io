import React from "react";
import {
  IcTopNavigation,
  IcNavigationItem,
  IcTypography,
} from "@ukic/react";
import { Link as GatsbyLink, withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

interface NavigationProps {
  appTitle: string;
}

const NavigationItem: React.FC<any> = ({ text, to, activeClassName, partiallyActive }) => (
  <IcNavigationItem slot="navigation">
    <GatsbyLink slot="navigation-item" to={to} activeClassName={activeClassName} partiallyActive={partiallyActive} >
      {text}
    </GatsbyLink>
  </IcNavigationItem>
);

const Navigation: React.FC<NavigationProps> = ({
  appTitle,
}) => (
  <div>
  <IcTopNavigation
    appTitle={appTitle}
    href={withPrefix("/")}
  >
    <span slot="app-icon">
      <StaticImage src='../images/botgc-banner-plain.png' alt='The Band of the Gloucestershire Constabulary'/>
    </span>

    <NavigationItem key='homepage' text='Home' to='/' activeClassName='active' partiallyActive={true} />
    <NavigationItem key='engagements' text='Engagements' to='/engagements' activeClassName='active' partiallyActive={true} />
    <NavigationItem key='cdinfo' text='CD Info' to='/cdinfo' activeClassName='active' partiallyActive={true} />
    <NavigationItem key='documents' text='Documents' to='/documents' activeClassName='active' partiallyActive={true} />
    <NavigationItem key='music' text='Music' to='/music' activeClassName='active' partiallyActive={true} />

  </IcTopNavigation>
</div>
);

export default Navigation;