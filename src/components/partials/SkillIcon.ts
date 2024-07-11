import styled from "styled-components";
import Image from "next/image";


const SkillIcon = styled(Image)(() => {
  return`
    width: 60px;
    height: 60px;
    object-fit: cover;
    display: block;
  `;
});

export { SkillIcon };
