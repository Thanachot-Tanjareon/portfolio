'use client';
import React from "react";
import { Pixelify_Sans } from "next/font/google";
import { FaTh } from "react-icons/fa";
// styled-components.
import { Nav } from "@/components/partials/Nav";
import { NavContainer } from "@/components/partials/Nav/NavContainer";
import { Logo } from "@/components/partials/Logo";
import { HorizontalMenu } from "@/components/partials/menu/HorizontalMenu";
import { IconButton } from "@/components/partials/button/IconButton";
// --- management state on web page. ---
import { useAppDispatch } from "@/store/hooks";
import { openModal } from "@/store/slices/modal";


const font = Pixelify_Sans({
    subsets: ['latin'],
    display: 'block',
    preload: true
});

const Navbar = (): JSX.Element => {
	const dispatch = useAppDispatch();

	const handleOpenModal = () => {
		dispatch(openModal());
		return;
	}

	return(
		<Nav>
			<NavContainer>
				<Logo href='/' className={font.className}>Thanachot Tanjareon</Logo>
				<HorizontalMenu>
					<IconButton onClick={handleOpenModal}>
						<FaTh />
					</IconButton>
				</HorizontalMenu>
			</NavContainer>
		</Nav>
	);
}

export default Navbar;
