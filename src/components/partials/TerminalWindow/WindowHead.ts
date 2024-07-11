import styled from "styled-components";


const WindowHead = styled('div')(() => {
    return`
        border-radius: inherit inherit 0 0;
        border-bottom: 1px solid rgb(160, 172, 222);
        width: 100%;
        height: 42px;
        padding: 0 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;
});

export { WindowHead };
