'use client';
import React from "react";
import { FaTimes, FaRegWindowMinimize, FaRegWindowMaximize } from "react-icons/fa";
// styled-components.
import { TerminalWindow } from "@/components/partials/TerminalWindow";
import { WindowHead } from "@/components/partials/TerminalWindow/WindowHead";
import { WindowTitle } from "@/components/partials/TerminalWindow/WindowTitle";
import { WindowBody } from "@/components/partials/TerminalWindow/WindowBody";
import {  CodeLine } from "@/components/partials/TerminalWindow/CodeLine";
import { Cursor } from "@/components/partials/TerminalWindow/Cursor";
import { HorizontalMenu } from "@/components/partials/menu/HorizontalMenu";
import { CloseButton } from "@/components/partials/TerminalWindow/button/CloseButton";
import { MiniButton } from "@/components/partials/TerminalWindow/button/MiniButton";
import { MaxButton } from "@/components/partials/TerminalWindow/button/MaxButton";


const Terminal = (): JSX.Element => {
    return(
        <TerminalWindow>
            <WindowHead>
                <WindowTitle>Linux Terminal</WindowTitle>
                <HorizontalMenu>
                    <MiniButton>
                        <FaRegWindowMinimize />
                    </MiniButton>
                    <MaxButton>
                        <FaRegWindowMaximize />
                    </MaxButton>
                    <CloseButton>
                        <FaTimes />
                    </CloseButton>
                </HorizontalMenu>
            </WindowHead>
            <WindowBody>
                <CodeLine>
                    <span>$</span>
                    <span>echo "Learning for develope yourself"</span>
                    <Cursor
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ repeat: Infinity, repeatDelay: 0.3 }}
                    />
                </CodeLine>
            </WindowBody>
        </TerminalWindow>
    );
}

export default Terminal;
