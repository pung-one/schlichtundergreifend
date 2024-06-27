import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import logoUp from "@/public/logo/logo.png";

import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { useContext, useEffect, useState } from "react";
import { MenuContext } from "./Layout";

export function Header() {
  const [menuButtonDisabled, setMenuButtonDisabled] = useState<boolean>(true);

  const { menuOpen, setMenuOpen } = useContext(MenuContext);

  const { scrollY } = useScroll();

  const blackLogoPosition = useTransform(scrollY, [0, 125], ["50%", "0%"]);

  const blackLogoLeft = useTransform(
    scrollY,
    [0, 250, 750],
    ["50%", "50%", "0%"]
  );
  const blackLogoX = useTransform(
    scrollY,
    [0, 250, 750],
    ["-50%", "-50%", "0%"]
  );
  const blackLogoSize = useTransform(
    scrollY,
    [0, 250, 450],
    ["20vh", "20vh", "10vh"]
  );

  const borderWidth = useTransform(scrollY, [250, 450], ["0%", "100%"]);

  const buttonOpacity = useTransform(scrollY, [350, 400], [0, 1]);

  useEffect(() => {
    buttonOpacity.on("change", (latest) => {
      latest === 1 && setMenuButtonDisabled(false);
      latest === 0 && setMenuButtonDisabled(true);
    });
  }, []);

  return (
    <Container style={{ height: blackLogoSize }}>
      <BlackLogoContainer
        style={{ y: blackLogoPosition, left: blackLogoLeft, x: blackLogoX }}
        initial={{ y: "100%" }}
        animate={{ y: "50%" }}
        transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
      >
        <BlackLogo src={logoUp} alt="Schlicht und Ergreifend Logo" />
      </BlackLogoContainer>

      <MenuButton
        disabled={menuButtonDisabled}
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ opacity: buttonOpacity }}
      >
        {menuOpen ? <TfiClose /> : <CiMenuBurger />}
      </MenuButton>

      <BorderBottom style={{ width: borderWidth }} />
    </Container>
  );
}

const Container = styled(motion.header)`
  z-index: 4;
  position: sticky;
  top: 0;
  overflow: hidden;
  width: 100%;
  background: white;
`;

const MenuButton = styled(motion.button)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 4vh;
  top: 2vh;
  height: 6vh;
  width: 6vh;
  background: none;
  border: none;
  border-radius: 3px;
  cursor: ${({ disabled }) => !disabled && "pointer"};
  * {
    font-size: 4vh;
  }
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0 0 15px grey);
    * {
    }
  }
  transition: transform 0.2s ease;
`;

const BlackLogoContainer = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: fit-content;
`;

const BlackLogo = styled(Image)`
  height: 100%;
  width: fit-content;
  padding: 10px;
  object-fit: contain;
  object-position: center;
`;

const BorderBottom = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 1px;
  background: black;
`;
