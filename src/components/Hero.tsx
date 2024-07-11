'use client';
import React from "react";
import Image from "next/image";
// components.
import Terminal from "@/components/Terminal";
// styled-components.
import { Banner } from "@/components/partials/Banner";
import { BannerContainer } from "@/components/partials/Banner/BannerContainer";
import { BannerCol } from "@/components/partials/Banner/BannerCol";
import { Heading } from "@/components/partials/text/Heading";
import { Description } from "@/components/partials/text/Description";
import { Profile } from "@/components/partials/Profile";
import { HorizontalMenu } from "@/components/partials/menu/HorizontalMenu";
import { PrimaryLink } from "@/components/partials/button/PrimaryLink";
// icons.
import { LinkedinIcon } from "@/components/partials/icons/LinkedinIcon";
import { FacebookIcon } from "@/components/partials/icons/FacebookIcon";
import { GithubIcon } from "@/components/partials/icons/GithubIcon";
// assets.
import profileImage from "@/../public/images/profile.jpg";


const Hero = (): JSX.Element => {
    return(
        <Banner>
            <BannerContainer>
                <BannerCol>
                    <Heading>Hi, I'm Thanachot Tanjareon.</Heading>
                    <Description>I'm a developer but I'm stil a student now (2024), I loved to learning some things because I want to know some deep story or problem.</Description>
                    <HorizontalMenu>
                        <PrimaryLink href='https://linkedin.com/in/thanachot-tanjareon-584564309/'>
                            <LinkedinIcon />
                            <p>Linked in</p>
                        </PrimaryLink>
                        <PrimaryLink href='https://facebook.com/ThanachotTanjareon/'>
                            <FacebookIcon />
                            <p>Facebook</p>
                        </PrimaryLink>
                        <PrimaryLink href='https://github.com/Thanachot-Tanjareon/'>
                            <GithubIcon />
                            <p>Github</p>
                        </PrimaryLink>
                    </HorizontalMenu>
                </BannerCol>
                <BannerCol>
                    <Terminal />
                    <Profile>
                        <Image src={profileImage} alt='Thanachot Tanjareon.' />
                    </Profile>
                </BannerCol>
            </BannerContainer>
        </Banner>
    );
}

export default Hero;
