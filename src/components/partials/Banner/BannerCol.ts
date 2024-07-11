import styled from "styled-components";


const BannerCol = styled('div')(() => {
    return`
        display: flex;
        flex-direction: column;
        justify-content: center;

        &:nth-child(1) {
            row-gap: 34px;
        }

        &:nth-child(2) {
            align-items: center;
            position: relative;
        }
    `;
});

export { BannerCol };
