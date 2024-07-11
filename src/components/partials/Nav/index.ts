import styled from "styled-components";


const Nav = styled('nav')(() => {
    return`
        background: rgb(0, 0, 0, 0.82);
        width: 100vw;
        height: 60px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
    `;
});

export { Nav };
