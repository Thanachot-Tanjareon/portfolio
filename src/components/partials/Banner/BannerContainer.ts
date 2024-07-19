import styled from "styled-components";


const BannerContainer = styled('div')(() => {
	return`
		width: calc(100% - 120px);
		height: 100%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(2, 1fr);

		@media screen and (max-width: 540px) {
			width: calc(100% - 40px);
			padding: 21px 0;
			grid-template-columns: repeat(1, 1fr);
		}

		@media screen and (max-width: 860px) {
			width: calc(100% - 64px);
			grid-template-columns: repeat(1, 1fr);
		}

		@media screen and (max-width: 1024px) {
			width: calc(100% - 74px);
		}
	`;
});

export { BannerContainer };
