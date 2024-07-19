import styled from "styled-components";


const PortfolioSpace = styled('section')(() => {
  return`
    width: calc(100% - 260px);
    height: calc(100% - 60px);
    padding: 0 10px;
    overflow-y: scroll;
    
    @media screen and (max-width: 1024px) {
      width: 100% !important;
      height: calc(100% - 110px);
		}
  `;
});

export { PortfolioSpace };
