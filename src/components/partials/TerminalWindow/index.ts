import styled from "styled-components";


const TerminalWindow = styled('div')(() => {
	return`
		background: linear-gradient(210deg, rgb(4, 11, 39, 0.74) 24%, rgb(160, 172, 222, 0.24) 36%, rgb(4, 11, 39, 0.74) 52%);
		border-radius: 4px;
		box-shadow: 0 0 3px 1px rgb(160, 172, 222, 0.72);
		width: 470px;
		height: 154px;
		position: absolute;
		top: 37px;
		right: 16px;
		z-index: 1;

		@media screen and (max-width: 540px) {
			width: 100%;
			position: static;
			top: 0;
			right: 0;
		}

		@media screen and (max-width: 860px) {
			width: 100% !important;
			height: 140px;
			top: -32px;
			left: unset;
			right: 14px;
		}

		@media screen and (max-width: 1024px) {
			width: 420px;
		}
	`;
});

export { TerminalWindow };
