'use client';
import React from "react";
import { Pixelify_Sans } from "next/font/google";
import { FaTh } from "react-icons/fa";
// styled-components.
import { Nav } from "@/components/partials/Nav";
import { NavContainer } from "@/components/partials/Nav/NavContainer";
import { Logo } from "@/components/partials/Logo";
import { HorizontalMenu } from "@/components/partials/menu/HorizontalMenu";
import { DropdownWrapper } from "@/components/partials/DropdownWrapper";
import { IconButton } from "@/components/partials/button/IconButton";


const font = Pixelify_Sans({
    subsets: ['latin'],
    display: 'block',
    preload: true
});

const Navbar = (): JSX.Element => {
    return(
        <Nav>
            <NavContainer>
                <Logo href='/' className={font.className}>Thanachot Tanjareon</Logo>
                <HorizontalMenu>
                    <DropdownWrapper>
                        <IconButton>
                            <FaTh />
                        </IconButton>
                    </DropdownWrapper>
                </HorizontalMenu>
            </NavContainer>
        </Nav>
    );
}

export default Navbar;
