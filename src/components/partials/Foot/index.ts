import styled from "styled-components";


const Foot = styled('footer')(() => {
    return`
        width: 100%;
        height: 72px;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 12px;
    `;
});

export { Foot };
