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

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <HeaderGeneralBlock>
      <nav>
        <ul>
          <li>
            {' '}
            <img
              src={logoIcon}
              alt={logoIcon}
              style={{ cursor: 'pointer' }}
              onClick={handleScrollTop}
            />
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
        <a
          href="https://t.me/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HeaderImgIconBlock src={telegramIcon} alt="Telegram" />
        </a>
        <a
          href="https://yourinfo.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HeaderImgIconBlock src={infoIcon} alt="Info" />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HeaderImgIconBlock src={twitterIcon} alt="Twitter" />
        </a>
        <a href="mailto:your.email@example.com">
          <HeaderImgIconBlock src={gmailIcon} alt="Gmail" />
        </a>
      </HeaderSocialIconsBlock>
    </HeaderGeneralBlock>
  );
};
export default Header;
