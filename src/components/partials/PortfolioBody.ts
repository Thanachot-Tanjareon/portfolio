import styled from "styled-components";


const PortfolioBody = styled('div')(() => {
  return`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 12px;
    padding: 24px 14px;

    @media screen and (max-width: 1024px) {
			flex-direction: column;
      gap: 34px;
    }
  `;
});

export { PortfolioBody };
