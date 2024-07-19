import styled from "styled-components";


const ModalTitle = styled('h3')(() => {
  return`
    border-bottom: 1px solid rgb(160, 172, 222);
    font-size: 22px;
    color: rgb(255, 255, 255);
    text-shadow: 0 0 14px rgb(160, 172, 222, 0.72);
    padding: 8px 34px;
  `;
});

export { ModalTitle };
