'use client';
import React from "react";
// --- Icons.  ---
import { FaTimes } from "react-icons/fa";
// --- Styled-components. ---
import { Overlay } from "@/components/partials/Overlay";
import { IconButtonOverlay } from "@/components/partials/button/IconButtonOverlay";
import { PortfolioModalWrapper } from "@/components/partials/PortfolioModalWrapper";


const PortfolioModal = (): JSX.Element => {
  return(
    <Overlay>
      {/* (start) closed overlay button */}
      <IconButtonOverlay>
        <FaTimes />
      </IconButtonOverlay>
      {/* (end) closed overlay button */}

      {/* (start) modal */}
      <PortfolioModalWrapper></PortfolioModalWrapper>
      {/* (end) modal */}
    </Overlay>
  );
}

export default PortfolioModal;
