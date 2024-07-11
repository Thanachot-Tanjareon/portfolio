import styled from "styled-components";


const CodeLine = styled('div')(() => {
    return`
        font-size: 14px;
        color: rgb(255, 255, 255, 0.85);
        padding: 0 4px;
        display: flex;
        align-items: center;
        column-gap: 8px;
    `;
});

export { CodeLine };
