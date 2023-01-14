import * as React from 'react';

import { Layout } from '../components/layout';

import { IcTypography } from '@ukic/react';

export default () => (
    <Layout>
        <IcTypography variant='h2'>Page not found</IcTypography>
        <IcTypography variant='body'>Sorry, we can&apos;t find the page you&apos;re looking for. This may be
        because the page has moved or there was a typo in the URL.</IcTypography>
    </Layout>
);

