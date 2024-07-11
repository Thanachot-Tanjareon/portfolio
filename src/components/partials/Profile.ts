import styled, { css, keyframes } from "styled-components";


const Profile = styled('div')(() => {
    return css`
        background: rgb(160, 172, 222, 0.26); 
        border-radius: 14px;
        box-shadow: 0 0 4px rgb(160, 172, 222, 0.72);
        width: 210px;
        height: 210px;
        padding: 6px;
        position: absolute;
        bottom: 36px;
        left: 82px;

        & img {
            border-radius: inherit;
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
        }
    `;
});

export { Profile };
