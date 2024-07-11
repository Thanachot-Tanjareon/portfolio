import styled from "styled-components";


const LogoThumbnail = styled('div')(() => {
  return`
    background: linear-gradient(210deg, rgb(4, 11, 39, 0.74) 24%, rgb(160, 172, 222, 0.24) 36%, rgb(4, 11, 39, 0.74) 52%);
    border-radius: 4px;
    box-shadow: 0 0 3px 1px rgb(160, 172, 222, 0.72);
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    row-gap: 6px;
  `;
});

export { LogoThumbnail };
