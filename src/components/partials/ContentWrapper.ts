import styled from "styled-components";


const ContentWrapper = styled('div')(() => {
  return`
    width: calc(100% - 170px);
    margin: 54px auto 82px;

    @media screen and (max-width: 540px) {
      width: 100% !important;
      margin: 48px auto 32px;
    }

    @media screen and (max-width: 860px) {
      width: 100%;
    }

    @media screen and (max-width: 1024px) {
			width: 100%;
		}
  `;
});

export { ContentWrapper };
