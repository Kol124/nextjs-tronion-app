import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Countdown } from "./Countdown";
import { Heading, Button } from "./common";
import { FaFileContract } from "react-icons/fa";

const Hero = ({ title, text }) => {
  return (
    <HeroContainer>
      <HeroText>
        <Heading className="hero lh-sm">{title}</Heading>
        <Heading className="h4 u-margin-y-medium grey lh-sm">{text}</Heading>
        <Button className="primary">White Paper</Button>
        <span>
          <FaFileContract size={20} /> Smart Contract
        </span>
      </HeroText>
      <Countdown />
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const HeroText = styled.div`
  flex-basis: 45%;
  text-align: left;

  span {
    margin-left: 1.8rem;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

Hero.defaultProps = {
  title: "This is not just a token",
  text: "Truly decentralised cryptocurrency based on the Binance Smart Chain (BSC) blockchain technology, designed to ensure anonymity through layers of security",
  img: "/images/tech.png",
};

export default Hero;
