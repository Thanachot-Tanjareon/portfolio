'use client';
import React from "react";
// styled-components.
import { Foot } from "@/components/partials/Foot";
import { Paragraph } from "@/components/partials/text/Paragraph";
import { Copyright } from "@/components/partials/Foot/Copyright";
// icons.
import { CopyrightIcon } from "@/components/partials/icons/CopyrightIcon";


const Footer = (): JSX.Element => {
    return(
        <Foot>
            <Copyright>
                <CopyrightIcon />
                <Paragraph>Copyright 2024</Paragraph>
            </Copyright>
            <Paragraph>Thanachot Tanjareon.</Paragraph>
        </Foot>
    );
}

export default Footer;
