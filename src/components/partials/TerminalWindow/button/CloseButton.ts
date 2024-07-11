import styled from "styled-components";


const CloseButton = styled('div')(() => {
    return`
        background: rgb(240, 95, 59);
        border-radius: 3px;
        width: 24px;
        height: 24px;
        display: grid;
        place-items: center;
        user-select: none;
        cursor: pointer;
        transition: all 60ms ease;

        & svg {
            color: rgb(255, 255, 255);
            width: 18px;
            height: 18px;
        }
    `;
});

export { CloseButton };
