import * as React from 'react';
import { FrontpageLayout } from '../layouts';
import { Box } from 'wix-style-react';
import { NavBar, Hero } from '../sections';
const Home: React.SFC = () => {
  return (
    <FrontpageLayout>
      <NavBar />
      <Hero />
      <Box height="100vh" backgroundColor="#fff">
        HI
      </Box>
    </FrontpageLayout>
  );
};

export default Home;
