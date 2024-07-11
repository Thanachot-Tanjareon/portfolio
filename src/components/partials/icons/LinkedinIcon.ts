import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";


const LinkedinIcon = styled(FaLinkedin)(() => {
    return`
        color: rgb(97, 125, 235);
        width: 24px;
        height: 24px;
        display: block;
    `;
});

export { LinkedinIcon };
