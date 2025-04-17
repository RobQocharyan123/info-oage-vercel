import {
  BurgerBlock,
  BurgerGeneralBlock,
  BurgerIconBlock,
  BurgerImgIconBlock,
  BurgerLogoBlock
} from "./styled";

import burgerLogo from "../../../Assets/burger/info-burger-logo-icon.svg";
import burgerIcon from "../../../Assets/burger/info-project-burger-icon.svg";
import cancelIcon from "../../../Assets/burger/info-project-cancel-icon.svg";

import telegramIcon from "../../../Assets/header/telegram-icon.svg";
import infoIcon from "../../../Assets/header/console-icon.svg";
import twitterIcon from "../../../Assets/header/twitter-icon.png";
import gmailIcon from "../../../Assets/header/gmail-icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "antd";

const Burger = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const closeBurger = () => {
    setOpen(false);
  };
  return (
    <BurgerGeneralBlock>
      <BurgerLogoBlock onClick={showDrawer}>
        <img src={burgerLogo} alt={burgerLogo} />
        <img
          src={burgerIcon}
          alt={burgerIcon}
          onClick={showDrawer}
          className="burgerIcon"
        />
      </BurgerLogoBlock>
      <BurgerBlock title="" onClose={closeBurger} open={open} width={240}>
        <ul>
          <li className="burgerText" onClick={closeBurger}>
            <Link to={"/info"}>What is Console?</Link>
          </li>
          <li className="burgerText" onClick={closeBurger}>
            <Link to={"/roadmap"}>Roadmap</Link>
          </li>
          <li className="burgerText" onClick={closeBurger}>
            <Link to={"/about"}>About us</Link>
          </li>

          <li>
            <Link to={"https://www.google.com/"} onClick={closeBurger}>
              <BurgerImgIconBlock src={telegramIcon} alt="Telegram" />
            </Link>
          </li>

          {/* <li>
            <Link to={"https://www.google.com/"} onClick={closeBurger}>
              <BurgerImgIconBlock src={infoIcon} alt="Info" />
            </Link>
          </li> */}

          <li>
            <Link
              to={"https://x.com/ConsP_official"}
              target="_blank"
              onClick={closeBurger}
            >
              <BurgerImgIconBlock src={twitterIcon} alt="Twitter" />
            </Link>
          </li>
          <li>
            <Link to={"mailto:conspro777@gmail.com"} onClick={closeBurger}>
              <BurgerImgIconBlock src={gmailIcon} alt="Gmail" />
            </Link>
          </li>
        </ul>
      </BurgerBlock>
    </BurgerGeneralBlock>
  );
};

export default Burger;
