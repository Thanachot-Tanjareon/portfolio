import styled from "styled-components";
import Link from "next/link";


const PrimaryLink = styled(Link)(() => {
	return`
		outline: 1px solid rgb(160, 172, 222);
		border-radius: 6px;
		font-size: 15px;
		color: rgb(255, 255, 255);
		text-decoration: none;
		padding: 8px 14px;
		display: flex;
		justify-content: center;
		align-items: center;
		column-gap: 10px;
		transition: all 60ms ease;
		user-select: none;

		&:hover {
			background: rgb(160, 172, 222);
			box-shadow: 0 0 3px 1px rgb(160, 172, 222, 0.72);
			outline: none;
		}
		
		&:active {
			background: rgb(40, 56, 121);
			outline: none;
		}
			
		@media screen and (max-width: 860px) {
			p {
				display: none;
			}
		}
	`;
});

export { PrimaryLink };
