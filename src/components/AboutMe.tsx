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
      <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatum repellendus mollitia, minus consequuntur harum repudiandae nam inventore provident facilis at ratione assumenda tenetur voluptate. Possimus officia facilis laudantium ducimus unde id! Quidem ipsa reiciendis exercitationem. Quis culpa placeat quae excepturi voluptatibus a libero, iste nihil quod eum saepe dolores maxime rem ab quidem nisi obcaecati amet vitae nesciunt atque magni? Animi labore magni dolor blanditiis facilis iusto minima expedita.</Paragraph>
    </ContentWrapper>
  );
}

export default AboutMe;
