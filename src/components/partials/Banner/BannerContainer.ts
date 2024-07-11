import styled from "styled-components";


const BannerContainer = styled('div')(() => {
    return`
        width: calc(100% - 120px);
        height: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    `;
});

export { BannerContainer };
