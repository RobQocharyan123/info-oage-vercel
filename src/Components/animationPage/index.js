import { motion } from 'framer-motion';
import {
  AnimationGeneralBlock,
  AnimationLeftSectionBlock,
  AnimationRightSectionBlock,
} from './styled';

import dropIcon from '../../Assets/drop.png';
import coinBottomIcon from '../../Assets/coin_bottom.png';
import coinTopIcon from '../../Assets/coin_top.png';
import consolLogoIcon from '../../Assets/conslogo.png';

const AnimationPage = () => {
  return (
    <AnimationGeneralBlock>
      <AnimationLeftSectionBlock>
        <motion.img
          src={dropIcon}
          alt="Drop Icon"
          animate={{ y: [0, 100, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.img
          src={coinBottomIcon}
          alt="Coin Bottom Icon"
          animate={{ y: [0, -100, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </AnimationLeftSectionBlock>
      <AnimationRightSectionBlock>
        <motion.img src={coinTopIcon} alt="Coin Top Icon" />
        <motion.img
          src={consolLogoIcon}
          alt="Console Logo"
          className="consoleLogo"
          animate={{ y: [0, -100, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </AnimationRightSectionBlock>
    </AnimationGeneralBlock>
  );
};

export default AnimationPage;
