import styled from "styled-components";


const SubContainer = styled('div')(() => {
	return`
		width: calc(100% - 340px);
		margin: 34px auto 152px;

		@media screen and (max-width: 540px) {
			width: calc(100% - 28px) !important;
			margin: 28px auto 74px;
		}
			
		@media screen and (max-width: 860px) {
			width: calc(100% - 64px) !important;
		}

		@media screen and (max-width: 1024px) {
			width: calc(100% - 240px);
		}
	`;
});

export { SubContainer };
