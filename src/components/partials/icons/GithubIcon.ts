import styled from "styled-components";
import { FaGithub } from "react-icons/fa";


const GithubIcon = styled(FaGithub)(() => {
    return`
        color: rgb(255, 255, 255);
        width: 24px;
        height: 24px;
        display: block;
    `;
});

export { GithubIcon };
