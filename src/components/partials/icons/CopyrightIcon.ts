import styled from "styled-components";
import { FaRegCopyright } from "react-icons/fa";


const CopyrightIcon = styled(FaRegCopyright)(() => {
    return`
        color: rgb(255, 255, 255);
        width: 20px;
        height: 20px;
    `;
});

export { CopyrightIcon };
