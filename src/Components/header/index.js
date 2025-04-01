import {
  HeaderGeneralBlock,
  HeaderImgIconBlock,
  HeaderSocialIconsBlock,
} from './styled';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoIcon from '../../Assets/header/logo-icon.svg';
import telegramIcon from '../../Assets/header/telegram-icon.svg';
import infoIcon from '../../Assets/header/console-icon.svg';
import twitterIcon from '../../Assets/header/twitter-icon.svg';
import gmailIcon from '../../Assets/header/gmail-icon.svg';
import { useEffect, useState } from 'react';
const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('info');
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/info') {
      navigate('/info');
    } else {
      const currentPath = location.pathname.split('/')[1];
      setActiveLink(currentPath);
    }
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <HeaderGeneralBlock>
      <nav>
        <ul>
          <li>
            {' '}
            <img src={logoIcon} alt={logoIcon} />
          </li>
          <li>
            <Link
              to={'/info'}
              onClick={() => handleLinkClick('info')}
              className={activeLink === 'info' ? 'activeLink' : ''}
            >
              What is info?
            </Link>
          </li>
          <li>
            <Link
              to={'/roadmap'}
              onClick={() => handleLinkClick('roadmap')}
              className={activeLink === 'roadmap' ? 'activeLink' : ''}
            >
              Roadmap
            </Link>
          </li>
          <li>
            <Link
              to={'/about'}
              onClick={() => handleLinkClick('about')}
              className={activeLink === 'about' ? 'activeLink' : ''}
            >
              About us
            </Link>
          </li>
        </ul>
      </nav>

      <HeaderSocialIconsBlock>
        <HeaderImgIconBlock src={telegramIcon} alt={telegramIcon} />
        <HeaderImgIconBlock src={infoIcon} alt={infoIcon} />
        <HeaderImgIconBlock src={twitterIcon} alt={twitterIcon} />
        <HeaderImgIconBlock src={gmailIcon} alt={gmailIcon} />
      </HeaderSocialIconsBlock>
    </HeaderGeneralBlock>
  );
};
export default Header;
