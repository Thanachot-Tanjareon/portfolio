import styled from "styled-components";


const BannerCol = styled('div')(() => {
	return`
		display: flex;
		flex-direction: column;
		justify-content: center;

		&:nth-child(1) {
			row-gap: 34px;
		}

		&:nth-child(2) {
			align-items: center;
			position: relative;
		}

		@media screen and (max-width: 540px) {
			&:nth-child(1) {
				row-gap: 20px;
			}
		}

		@media screen and (max-width: 860px) {
			&:nth-child(1) {
				z-index: -1;
			}
				
			&:nth-child(2) {
				z-index: -2;
			}
		}
	`;
});

export { BannerCol };
