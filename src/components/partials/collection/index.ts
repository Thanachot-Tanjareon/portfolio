import styled from "styled-components";


const Collection = styled('div')(() => {
  return`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;

    img {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      display: block;
      object-fit: contain;
    }
  `;
});

export { Collection };
