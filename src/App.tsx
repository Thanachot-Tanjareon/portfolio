'use client';
import React from "react";
import { Red_Hat_Display } from "next/font/google";
// --- Components. ---
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import ExampleProjects from "@/components/ExampleProjects";
import ContactMe from "@/components/ContactMe";
import QandA from "@/components/QandA";
import Footer from "@/components/Footer";
// --- Styled-components. ---
import { Body } from "@/components/partials/Body";
import { Container } from "@/components/partials/Container";
import { SubContainer } from "@/components/partials/SubContainer";


const font = Red_Hat_Display({
    subsets: ['latin'],
    display: 'block',
    weight: '400',
    preload: true
});

const App = (): JSX.Element => {
    return(
        <Body className={font.className}>
            <Container>
                <Navbar />
                <Hero />
                <SubContainer>
                    <AboutMe />
                    <Skills />
                    <ExampleProjects />
                    <QandA />
                    <ContactMe />
                </SubContainer>
                <Footer />
            </Container>
        </Body>
    );
}

export default App;
