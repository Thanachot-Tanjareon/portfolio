'use client';
import React from "react";
// --- styled-components. ---
import { ContentWrapper } from "@/components/partials/ContentWrapper";
import { Title } from "@/components/partials/text/Title";
import { VerticalMenu } from "@/components/partials/menu/VerticalMenu";
import { LinkHover } from "@/components/partials/link/LinkHover";
import { Paragraph } from "@/components/partials/text/Paragraph";
import { TextIcon } from "@/components/partials/text/TextIcon";
// --- icons. ---
import { FacebookIcon } from "@/components/partials/icons/FacebookIcon";
import { GithubIcon } from "@/components/partials/icons/GithubIcon";
import { LinkedinIcon } from "@/components/partials/icons/LinkedinIcon";
import { GmailIcon } from "@/components/partials/icons/GmailIcon";


const ContactMe = (): JSX.Element => {
  return(
    <ContentWrapper>
      <Title>Contact Me</Title>
      <VerticalMenu>
        <LinkHover href='https://facebook.com/ThanachotTanjareon/'>
          <FacebookIcon />
          <Paragraph>Thanachot Tanjareon.</Paragraph>
        </LinkHover>
        <LinkHover href='https://github.com/Thanachot-Tanjareon/'>
          <GithubIcon />
          <Paragraph>Thanachot Tanjareon.</Paragraph>
        </LinkHover>
        <LinkHover href='https://linkedin.com/in/thanachot-tanjareon-584564309/'>
          <LinkedinIcon />
          <Paragraph>Thanachot Tanjareon.</Paragraph>
        </LinkHover>
        <TextIcon>
          <GmailIcon />
          <Paragraph>thanachot2549.orther@gmail.com</Paragraph>
        </TextIcon>
      </VerticalMenu>
    </ContentWrapper>
  );
}

export default ContactMe;
