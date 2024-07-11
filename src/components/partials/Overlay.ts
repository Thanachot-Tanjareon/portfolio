import styled from "styled-components";


const Overlay = styled('div')(() => {
  return`
    background-color: rgb(0, 0, 0, 0.86);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  `;
});

export { Overlay };
