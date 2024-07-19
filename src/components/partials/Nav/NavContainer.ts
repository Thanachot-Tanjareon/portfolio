import styled from "styled-components";


const NavContainer = styled('div')(() => {
	return`
		width: calc(100% - 240px);
		height: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media screen and (max-width: 480px) {
			width: calc(100% - 40px);
		}
		@media screen and (max-width: 860px) {
			width: calc(100% - 62px);
		}
	`;
});

export { NavContainer };
