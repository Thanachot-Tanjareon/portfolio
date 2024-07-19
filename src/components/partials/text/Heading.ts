import styled from "styled-components";


const Heading = styled('h1')(() => {
  return`
    font-size: 34px;
    color: rgb(255, 255, 255);
    line-height: 30px;
    text-shadow: 0 0 14px rgb(160, 172, 222, 0.72);

    @media screen and (max-width: 540px) {
      font-size: 28px;
    }
  `;
});

export { Heading };
