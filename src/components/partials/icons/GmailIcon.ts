import styled from "styled-components";
import { FaEnvelope } from "react-icons/fa";


const GmailIcon = styled(FaEnvelope)(() => {
  return`
    font-size: 24px;
    color: rgb(255, 255, 255);
    widht: 24px;
    height: 24px;
    display: block;
  `;
});

export { GmailIcon };
