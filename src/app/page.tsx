import React from "react";
import type { Metadata } from "next";
// view.
import App from "@/App";


const metadata: Metadata = {
    title: 'Thanachot Tanjareon | portfolio',
    authors: [
        { name: 'Thanachot Tanjareon', url: 'https://facebook.com/ThanachotTanjareon/' }
    ],
    description: 'Welcome to my portfolio, and  I\'m Thanachot Tanjreon. I\'m a developer and student (in 2024)',
    keywords: ['Thanachot Tanjareon', 'Thai portfolio', 'Thai develeoper portfolio', 'student portfolio']
};

const Home = (): JSX.Element => {
    return(
        <App />
    );
}

export { metadata };
export default Home;
