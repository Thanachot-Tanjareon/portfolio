import styled from "styled-components";


const IconButton = styled('button')(() => {
    return`
        background: transparent;
        border: none;
        border-radius: 6px;
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        user-select: none; 
        cursor: pointer;
        transition: all 60ms ease;

        & svg {
            color: rgb(255, 255, 255);
            width: 24px;
            height: 24px;
        }

        &:hover {
            background: rgb(160, 172, 222);
            box-shadow: 0 0 3px 1px rgb(160, 172, 222, 0.72);
        }
        
        &:active {
            background: rgb(40, 56, 121);
        }
    `;
});

export { IconButton };
