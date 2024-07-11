import styled from "styled-components";
import Link from "next/link";


const Logo = styled(Link)(() => {
    return`
        font-size: 28px;
        font-weight: bold;
        color: rgb(255, 255, 255);
        text-decoration: none;
        user-select: none;
    `;
});

export { Logo };
