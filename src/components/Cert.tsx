'use client';
import React from "react";
import Image from "next/image";
// --- Styled-components. ---
import { ContentWrapper } from "@/components/partials/ContentWrapper";
import { Title } from "@/components/partials/text/Title";
import { Paragraph } from "@/components/partials/text/Paragraph";
import { Collection } from "@/components/partials/collection";
// --- assets. ---
import webDesignCert$2023 from "@/../public/images/certificates/web-design-contest-1.png";
import programmingContest$1 from "@/../public/images/certificates/programming-contest-2.png";
import programmingContest$2 from "@/../public/images/certificates/programming-contest-1.png";
import programmingContest$3 from "@/../public/images/certificates/programming-contest-3.png";


const Cert = (): JSX.Element => {
  return(
    <ContentWrapper>
      <Title>Certificate</Title>
      <Collection>
        <Image src={webDesignCert$2023} alt="E-Tech IT Day's webpage contest." />
        <Image src={programmingContest$1} alt="programming contest about algorithms." />
        <Image src={programmingContest$2} alt="programming contest about algorithms." />
        <Image src={programmingContest$3} alt="programming contest about algorithms." />
      </Collection>
    </ContentWrapper>
  );
}

export default Cert;
