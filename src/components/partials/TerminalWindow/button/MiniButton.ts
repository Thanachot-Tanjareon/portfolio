import styled from "styled-components";


const MiniButton = styled('div')(() => {
    return`
        background: rgb(160, 172, 222);
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
            width: 14px;
            height: 14px;
        }
    `;
});

export { MiniButton };
