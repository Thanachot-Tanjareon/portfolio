import styled from "styled-components";


const NavContainer = styled('div')(() => {
    return`
        width: calc(100% - 240px);
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;
});

export { NavContainer };
