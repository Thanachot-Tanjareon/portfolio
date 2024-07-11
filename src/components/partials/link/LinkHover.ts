import styled from "styled-components";
import Link from "next/link";

const LinkHover = styled(Link)(() => {
  return`
    font-size: 15px;
    color: rgb(255, 255, 255);
    text-decoration: none;
    width: fit-content;
    height: fit-content;
    padding: 7px 14px;
    display: flex;
    align-items: center;
    column-gap: 12px;

    &:hover {
      background: rgb(160, 172, 222);
      box-shadow: 0 0 3px 1px rgb(160, 172, 222, 0.72);
    }

    &:active {
      background: rgb(40, 56, 121);
    }
  `;
});

export { LinkHover };
