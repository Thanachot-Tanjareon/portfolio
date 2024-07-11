import styled from "styled-components";
import { FaCode } from "react-icons/fa";


const CodeIcon = styled(FaCode)(() => {
    return`
        color: rgb(255, 255, 255, 0.74);
        width: 24px;
        height: 24px;
        display: block;
    `;
});

export { CodeIcon };
