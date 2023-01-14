import * as React from 'react';

import { IcAlert, IcLink, IcTypography } from '@ukic/react';

export const WrappedH1: React.FC = (props: any) => (
    <IcTypography
        variant="h1"
        apply-vertical-margins
        data-class="heading-extra-large"
    >
        {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
        <h3 {...props} />
    </IcTypography>
);

export const WrappedH2: React.FC = (props: any) => (
    <IcTypography variant="h2" apply-vertical-margins data-class="h2">
        {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
        <h4 {...props} />
    </IcTypography>
);

export const WrappedH3: React.FC = (props: any) => (
    <IcTypography variant="h3" apply-vertical-margins data-class="h3">
        {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
        <h5 {...props} />
    </IcTypography>
);

export const WrappedH4: React.FC = (props: any) => (
    <IcTypography variant="h4" apply-vertical-margins data-class="h4">
        {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
        <h6 {...props} />
    </IcTypography>
);

export const WrappedP: React.FC = (props: any) => (
    <IcTypography variant="body" apply-vertical-margins>
        {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
        <p {...props} />
    </IcTypography>
);

export const WrappedLink: React.FC = (props: any) => (
    <IcLink {...props} />
);

export const WrappedLi: React.FC = (props: any) => (
    <li>
        <IcTypography variant="body">
            <p {...props} />
        </IcTypography>
    </li>
);

export const WrappedCode: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <code className="code">{children}</code>
);


export const WrappedAlert: React.FC = (props: any) => (
    <IcAlert data-class="alert" announced={false} {...props} />
);

export const WrappedBlockquote: React.FC = (props: any) => (
    <blockquote {...props} className="blockquote" />
);
