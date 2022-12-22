import React from "react";
import {
  IcTopNavigation,
  IcNavigationItem,
} from "@ukic/react";
import { Link as GatsbyLink, withPrefix } from "gatsby";

interface NavigationProps {
  appTitle: string;
  status: string;
  version: string;
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
  status,
  version,
}) => (
  <IcTopNavigation
    appTitle={appTitle}
    status={status}
    version={version}
    href={withPrefix("/")}
  >

    <NavigationItem key='cdinfo' text='Engagements' to='/engagements' activeClassName='active' partiallyActive={true} />
    <NavigationItem key='cdinfo' text='Contacts' to='/contacts' activeClassName='active' partiallyActive={true} />
    <NavigationItem key='cdinfo' text='CD Info' to='/cdinfo' activeClassName='active' partiallyActive={true} />
    <NavigationItem key='cdinfo' text='Documents' to='/documents' activeClassName='active' partiallyActive={true} />
    <NavigationItem key='cdinfo' text='Music' to='/music' activeClassName='active' partiallyActive={true} />

  </IcTopNavigation>
);

export default Navigation;