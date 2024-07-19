import styled from "styled-components";


const PrimaryButton = styled('button')(() => {
  return`
    outline: 1px solid rgb(160, 172, 222);
    background: transparent;
    border: none;
    border-radius: 6px;
    font-size: 15px;
    color: rgb(255, 255, 255);
    text-decoration: none;
    padding: 8px 14px;
    transition: all 60ms ease;
    user-select: none;
    cursor: pointer;

    &:hover, &.active {
      background: rgb(160, 172, 222);
      box-shadow: 0 0 3px 1px rgb(160, 172, 222, 0.72);
      outline: none;
    }
    
    &:active {
      background: rgb(40, 56, 121);
      outline: none;
    }
  `;
});

export { PrimaryButton };
