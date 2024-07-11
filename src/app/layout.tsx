import React from "react";
// reset default css on browsers.
import "@/app/globals.css";


type Props = {
    children: React.ReactNode;
};

const RootLayout = (props: Readonly<Props>): JSX.Element => {
    return(
        <html lang='en'>
            { props.children }
        </html>
    );
}

export default RootLayout;
