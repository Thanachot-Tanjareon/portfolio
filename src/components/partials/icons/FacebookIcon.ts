import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";


const FacebookIcon = styled(FaFacebook)(() => {
    return`
        color: rgb(60, 96, 239);
        width: 24px;
        height: 24px;
        display: block;
    `;
});

export { FacebookIcon };
