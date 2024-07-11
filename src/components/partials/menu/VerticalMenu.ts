import styled from "styled-components";


const VerticalMenu = styled('div')(() => {
  return`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  `;
});

export { VerticalMenu };
