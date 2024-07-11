import styled from "styled-components";


const PortfolioModalWrapper = styled('div')(() => {
  return`
    background: linear-gradient(210deg, rgb(4, 11, 39, 0.92) 24%, rgb(160, 172, 222, 0.25) 36%, rgb(4, 11, 39, 0.92) 52%);
    border-radius: 4px;
    box-shadow: 0 0 3px 1px rgb(160, 172, 222, 0.72);
    width: calc(100% - 240px);
    height: calc(100% - 74px);
    overflow: hidden;
  `;
});

export { PortfolioModalWrapper };
