import styled from "styled-components";


const PortfolioSidebar = styled('aside')(() => {
  return`
    width: 260px;
    height: calc(100% - 46px);
    padding: 0 6px;
    display: flex;
    flex-direction: column;
    row-gap: 42px;

    @media screen and (max-width: 720px) {
			width: 100% !important;
      height: unset;
      padding: 0;
      flex-direction: column !important;
      row-gap: 14px !important;

      & .content__menu {
        flex-direction: row;
        column-gap: 10px;
      }
      
      & h3 {
        display: none;
      }
		}

    @media screen and (max-width: 1024px) {
      width: 100%;
      height: unset;
      padding: 0;
      flex-direction: row;
      column-gap: 10px;

      & .content__menu {
        flex-direction: row;
        column-gap: 10px;
      }
      
      & h3 {
        display: none;
      }
    }
  `;
});

export { PortfolioSidebar };
