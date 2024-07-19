import styled from "styled-components";


const Answer = styled('p')(() => {
  return`
    font-size: 14px;
    color: rgb(255, 255, 255);
    line-height: 18px;
    text-align: justify;
    width: calc(100% - 62px);
    margin: 10px auto 0;

    @media screen and (max-width: 480px) {
      width: calc(100% - 36px);
    }
  `;
});

export { Answer };
