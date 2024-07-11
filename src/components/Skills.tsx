'use client';
import React from "react";
// --- Styled-components. ---
import { ContentWrapper } from "@/components/partials/ContentWrapper";
import { Title } from "@/components/partials/text/Title";
import { Paragraph } from "@/components/partials/text/Paragraph";
import { Row } from "@/components/partials/grid/Row";
import { LogoThumbnail } from "@/components/partials/LogoThumbnail";
import { SkillIcon } from "@/components/partials/SkillIcon";
// --- assets. ---
import html5Icon from "@/../public/images/logo/html-5-svgrepo-com.svg";
import css3Icon from "@/../public/images/logo/css3-svgrepo-com.svg";
import jsIcon from "@/../public/images/logo/javascript-svgrepo-com.svg";
import nodejsIcon from "@/../public/images/logo/nodejs-svgrepo-com.svg";
import tsIcon from "@/../public/images/logo/typescript-svgrepo-com.svg";
import phpIcon from "@/../public/images/logo/php-svgrepo-com.svg";
import pythonIcon from "@/../public/images/logo/python-svgrepo-com.svg";
import mysqlIcon from "@/../public/images/logo/mysql-logo-svgrepo-com.svg";
import reactjsIcon from "@/../public/images/logo/react-javascript-js-framework-facebook-svgrepo-com.svg";
import nextjsIcon from "@/../public/images/logo/nextjs-svgrepo-com.svg";
import cprogramming from "@/../public/images/logo/icons8-c-programming.svg";


const Skills = (): JSX.Element => {
  return(
    <ContentWrapper>
      <Title>Skills</Title>
      <Row $col={4} $size={130} $rowSize={130}>
        <LogoThumbnail>
          <SkillIcon src={html5Icon} alt="HTML5 logo." />
          <Paragraph>HTML5</Paragraph>
        </LogoThumbnail>
        <LogoThumbnail>
          <SkillIcon src={css3Icon} alt="CSS3 logo." />
          <Paragraph>CSS</Paragraph>
        </LogoThumbnail>
        <LogoThumbnail>
          <SkillIcon src={jsIcon} alt="JavaScript logo" />
          <Paragraph>JavaScrirpt</Paragraph>
        </LogoThumbnail>
        <LogoThumbnail>
          <SkillIcon src={tsIcon} alt="TypeScript logo." />
          <Paragraph>TypeScript</Paragraph>
        </LogoThumbnail>
      </Row>
      <Row $col={4} $size={130} $rowSize={130}>
        <LogoThumbnail>
          <SkillIcon src={nodejsIcon} alt="Node.JS logo." />
          <Paragraph>Node.JS</Paragraph>
        </LogoThumbnail>
        <LogoThumbnail>
          <SkillIcon src={phpIcon} alt="PHP logo." />
          <Paragraph>PHP</Paragraph>
        </LogoThumbnail>
        <LogoThumbnail>
          <SkillIcon src={mysqlIcon} alt="MySQL logo." />
          <Paragraph>MySQL</Paragraph>
        </LogoThumbnail>
        <LogoThumbnail>
          <SkillIcon src={pythonIcon} alt="Python logo." />
          <Paragraph>Python</Paragraph>
        </LogoThumbnail>
      </Row>
      <Row $col={4} $size={130} $rowSize={130}>
        <LogoThumbnail>
          <SkillIcon src={reactjsIcon} alt="React.JS logo." />
          <Paragraph>React.JS</Paragraph>
        </LogoThumbnail>
        <LogoThumbnail>
          <SkillIcon src={nextjsIcon} alt="Next.JS logo." />
          <Paragraph>Next.JS</Paragraph>
        </LogoThumbnail>
        <LogoThumbnail>
          <SkillIcon src={cprogramming} alt="C programming language logo." />
          <Paragraph>C</Paragraph>
        </LogoThumbnail>
      </Row>
    </ContentWrapper>
  );
}

export default Skills;
