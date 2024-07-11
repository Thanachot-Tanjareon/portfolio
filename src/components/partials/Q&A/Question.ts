import styled from "styled-components";


const Question = styled('h4')(() => {
  return`
    border-bottom: 1px solid rgb(160, 172, 222);
    font-size: 18px;
    color: rgb(255, 255, 255);
    line-height: 20px;
    text-shadow: 0 0 14px rgb(160, 172, 222, 0.72);
    padding: 8px 18px;
  `;
});

export { Question };
