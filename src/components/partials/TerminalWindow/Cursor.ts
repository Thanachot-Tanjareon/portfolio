import styled from "styled-components";
import { motion } from "framer-motion";


const Cursor = styled(motion('div'))(() => {
    return`
        background: rgb(255, 255, 255);
        width: 1px;
        height: 18px;
    `;
});

export { Cursor };
