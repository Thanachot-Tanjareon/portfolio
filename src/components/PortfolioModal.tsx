'use client';
import React from "react";
import Image from "next/image";
// --- Icons.  ---
import { FaTimes } from "react-icons/fa";
import { FacebookIcon } from "@/components/partials/icons/FacebookIcon";
import { GithubIcon } from "@/components/partials/icons/GithubIcon";
import { LinkedinIcon } from "@/components/partials/icons/LinkedinIcon";
// --- Styled-components. ---
import { Overlay } from "@/components/partials/Overlay";
import { IconButtonOverlay } from "@/components/partials/button/IconButtonOverlay";
import { PortfolioModalWrapper } from "@/components/partials/PortfolioModalWrapper";
import { ModalTitle } from "@/components/partials/text/ModalTitle";
import { PortfolioBody } from "@/components/partials/PortfolioBody";
import { PortfolioSidebar } from "@/components/partials/PortfolioSidebar";
import { PortfolioSpace } from "@/components/partials/PortfolioSpace";
import { Title } from "@/components/partials/text/Title";
import { PrimaryLink } from "@/components/partials/button/PrimaryLink";
import { PrimaryButton } from "@/components/partials/button/PrimaryButton";
import { HorizontalMenu } from "@/components/partials/menu/HorizontalMenu";
import { VerticalMenu } from "@/components/partials/menu/VerticalMenu";
import { CertCollection } from "@/components/partials/CertCollection";
// --- assets. ---
import webDesignCert$2023 from "@/../public/images/certificates/web-design-contest-1.png";
import programmingContest$1 from "@/../public/images/certificates/programming-contest-2.png";
import programmingContest$2 from "@/../public/images/certificates/programming-contest-1.png";
import programmingContest$3 from "@/../public/images/certificates/programming-contest-3.png";
// --- management state on web page. ---
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { getPropertyStateModal, closedModal, switchProject, switchCertificate } from "@/store/slices/modal";


const PortfolioModal = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { content } = useAppSelector(getPropertyStateModal);

  const handleClosedModal = (): void => {
    dispatch(closedModal());
    return;
  }

  const handleSwitchProject = (): void => {
    dispatch(switchProject());
    return;
  }

  const handleSwitchCertificate = (): void => {
    dispatch(switchCertificate());
    return;
  }

  return(
    <Overlay>
      {/* (start) closed overlay button */}
      <IconButtonOverlay onClick={handleClosedModal}>
        <FaTimes />
      </IconButtonOverlay>
      {/* (end) closed overlay button */}

      {/* (start) modal */}
      <PortfolioModalWrapper>
        <ModalTitle>Contribution</ModalTitle>
        <PortfolioBody>
          <PortfolioSidebar>
            <VerticalMenu className="content__menu">
              <PrimaryButton onClick={handleSwitchProject} type='button' className={content.project? "active": ""}>Projects</PrimaryButton>
              <PrimaryButton onClick={handleSwitchCertificate} type='button' className={content.certificate? "active": ""}>Certificates</PrimaryButton>
            </VerticalMenu>
            <div>
              <Title>Contacts</Title>
              <HorizontalMenu>
                <PrimaryLink href='https://facebook.com/ThanachotTanjareon/'>
                  <FacebookIcon />
                </PrimaryLink>
                <PrimaryLink href='https://linkedin.com/in/thanachot-tanjareon-584564309/'>
                  <GithubIcon />
                </PrimaryLink>
                <PrimaryLink href='https://github.com/Thanachot-Tanjareon/'>
                  <LinkedinIcon />
                </PrimaryLink>
              </HorizontalMenu>
            </div>
          </PortfolioSidebar>
          <PortfolioSpace>
            {/* (start) side-projects collection. */}
            {/* (end) side-projects collection. */}

            {/* (start) certificate collection. */}
            {content.certificate? (
              <CertCollection>
                <Image src={webDesignCert$2023} alt="E-Tech IT Day's webpage contest." />
                <Image src={programmingContest$1} alt="programming contest about algorithms." />
                <Image src={programmingContest$2} alt="programming contest about algorithms." />
                <Image src={programmingContest$3} alt="programming contest about algorithms." />
              </CertCollection>
            ): null}
            {/* (end) certificate collection. */}
          </PortfolioSpace>
        </PortfolioBody>
      </PortfolioModalWrapper>
      {/* (end) modal */}
    </Overlay>
  );
}

export default PortfolioModal;
