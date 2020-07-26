import * as React from 'react';
import { Box, Text, Image, Input } from 'wix-style-react';
import h from './hero.scss';
import { useMediaQuery } from 'react-responsive';

export interface HeroProps {}

const Hero: React.SFC<HeroProps> = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  });
  return (
    <Box minHeight="100vh" align="center" verticalAlign="middle" width="100vw">
      <Box height="31em" width="71.250em" direction="vertical">
        <Box
          height="21.438em"
          width="100%"
          align="space-between"
          direction={isTabletOrMobileDevice ? 'vertical' : 'horizontal'}
          marginBottom="1em"
        >
          <Box width="27.813em" height="21.438em" direction="vertical">
            <h1 className={h.heading}>
              Trello lets you work more collaboratively and get more done.
            </h1>
            <p className={h.paragraph}>
              Trello’s boards, lists, and cards enable you to organize and
              prioritize your projects in a fun, flexible, and rewarding way.
            </p>
            {isTabletOrMobileDevice && (
              <button className={h.mbtn}>Sign Up - It's Free!</button>
            )}
          </Box>
          <Box
            width={isTabletOrMobileDevice ? '100%' : '33.750em'}
            height="25.563em"
            verticalAlign="top"
            marginTop={isTabletOrMobileDevice ? '3em' : '-3em'}
          >
            <Image
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg"
              fit={isTabletOrMobileDevice ? 'contain' : 'cover'}
              className={h.img}
              position={isTabletOrMobileDevice ? 'center' : 'top'}
              loading="lazy"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
        {!isTabletOrMobileDevice && (
          <Box height="5.438em" width="60%" verticalAlign="middle">
            <Input className={h.input} placeholder="Email" />
            <button className={h.btn__cta}>Sign Up - It's Free!</button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Hero;
