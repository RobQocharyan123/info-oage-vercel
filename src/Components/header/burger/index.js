import {
  BurgerBlock,
  BurgerGeneralBlock,
  BurgerIconBlock,
  BurgerImgIconBlock,
  BurgerLogoBlock,
} from './styled';

import burgerLogo from '../../../Assets/burger/info-burger-logo-icon.svg';
import burgerIcon from '../../../Assets/burger/info-project-burger-icon.svg';
import cancelIcon from '../../../Assets/burger/info-project-cancel-icon.svg';

import telegramIcon from '../../../Assets/header/telegram-icon.svg';
import infoIcon from '../../../Assets/header/console-icon.svg';
import twitterIcon from '../../../Assets/header/twitter-icon.png';
import gmailIcon from '../../../Assets/header/gmail-icon.svg';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Drawer } from 'antd';

const Burger = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const activeLink = location.pathname.split('/')[1];
  const showDrawer = () => {
    setOpen(true);
  };
  const closeBurger = () => {
    setOpen(false);
  };

  return (
    <BurgerGeneralBlock>
      <BurgerLogoBlock>
        <img
          src={burgerLogo}
          alt={burgerLogo}
          onClick={() => navigate('/info')}
          style={{ cursor: 'pointer' }}
        />
        <img
          src={burgerIcon}
          alt={burgerIcon}
          onClick={showDrawer}
          className="burgerIcon"
        />
      </BurgerLogoBlock>
      <BurgerBlock title="" onClose={closeBurger} open={open} width={240}>
        <ul>
          <li onClick={closeBurger} className="burgerText">
            <Link
              to="/info"
              className={` ${activeLink === 'info' ? 'activeLink' : ''}`}
            >
              What is Console?
            </Link>
          </li>
          <li onClick={closeBurger} className="burgerText">
            <Link
              to="/roadmap"
              className={` ${activeLink === 'roadmap' ? 'activeLink' : ''}`}
            >
              Roadmap
            </Link>
          </li>
          <li onClick={closeBurger} className="burgerText">
            <Link
              to="/about"
              className={` ${activeLink === 'about' ? 'activeLink' : ''}`}
            >
              About us
            </Link>
          </li>
          <li className={`burgerEmail`}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=conspro777@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              For Partnership
            </a>
          </li>

          <li>
            <Link to={'https://www.google.com/'} onClick={closeBurger}>
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
              to={'https://x.com/ConsP_official'}
              target="_blank"
              onClick={closeBurger}
            >
              <BurgerImgIconBlock src={twitterIcon} alt="Twitter" />
            </Link>
          </li>
          <li>
            <Link
              to={
                'https://mail.google.com/mail/?view=cm&fs=1&to=conspro777@gmail.com'
              }
              onClick={closeBurger}
              target="_blank"
            >
              <BurgerImgIconBlock src={gmailIcon} alt="Gmail" />
            </Link>
          </li>
        </ul>
      </BurgerBlock>
    </BurgerGeneralBlock>
  );
};

export default Burger;
