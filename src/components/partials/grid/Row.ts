import styled from "styled-components";


type Props = {
  $col: number;
  $size: number | string;
  $rowSize: number | string;
};

const Row = styled('div')<Props>((props) => {
  return`
    display: grid;
    grid-template-columns: repeat(${props.$col}, ${typeof props.$size === 'number'? `${props.$size}px`: props.$size});
    grid-template-rows: ${typeof props.$rowSize === 'number'? `${props.$rowSize}px`: props.$rowSize};
    justify-content: center;
    margin: 6px 0;
    column-gap: 10px;

    @media screen and (max-width: 540px) {
      margin: 12px 0;
      grid-template-columns: repeat(2, 160px);
      row-gap: 12px;
      column-gap: 8px;
    }
  `;
});

export { Row };
