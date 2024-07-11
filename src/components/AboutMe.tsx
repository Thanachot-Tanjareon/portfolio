'use client';
import React from "react";
// --- styled-components. ---
import { Title } from "@/components/partials/text/Title";
import { Paragraph } from "@/components/partials/text/Paragraph";
import { ContentWrapper } from "@/components/partials/ContentWrapper";


const AboutMe = (): JSX.Element => {
  return(
    <ContentWrapper>
      <Title>About me</Title>
      <Paragraph>Hi, I'm Thanachot Tanjareon. I'm a full-stack developer and self-taught. I started to learn programming skill since I still learn at grade 9. In start, I started to learning a web develoment basic but the JavaScript isn't easy in starting. And I still learned some skill other as sush as algorithms, Photoshop, video editing and other.</Paragraph>
    </ContentWrapper>
  );
}

export default AboutMe;
