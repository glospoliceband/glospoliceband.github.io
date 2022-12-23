import React, { ReactNode, useState } from "react";

import { IcFooter } from "@ukic/react";

export const Footer = () => (
    <div className="footer">
        <IcFooter
            description='The Band of the Gloucestershire Constabulary'
            caption='Copyright © The Band of the Gloucestershire 2022.'
            copyright={false}
        />
    </div>);