import React from "react";
// --- set-up global store on web page. ---
import GlobalStore from "@/store/GlobalStore";
// reset default css on browsers.
import "@/app/globals.css";


type Props = {
    children: React.ReactNode;
};

const RootLayout = (props: Readonly<Props>): JSX.Element => {
	return(
		<html lang='en'>
			<GlobalStore>
				{ props.children }
			</GlobalStore>
		</html>
	);
}

export default RootLayout;
