import styled from "styled-components";


const CertCollection = styled('div')(() => {
  return`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 10px;
    column-gap: 6px;
    place-items: center;

    & img {
      width: calc(100% - 40px);
      height: 100%;
      object-fit: cover;
    }
  `;
});

export { CertCollection };
