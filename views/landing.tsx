/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client';

import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// project import

import Hero from '@/sections/landing/Header';
import NumberBlock from '@/sections/landing/NumberBlock';
import BrowserBlock from '@/sections/landing/BrowserBlock';
import FeatureBlock from '@/sections/landing/FeatureBlock';
import DemoBlock from '@/sections/landing/DemoBlock';
import ElementBlock from '@/sections/landing/ElementBlock';
import PartnerBlock from '@/sections/landing/PartnerBlock';

import { ThemeDirection, ThemeMode } from '@/app/config';
import useConfig from '@/hooks/useConfig';
import CardMedia from '@mui/material/CardMedia';

// third-party

// types

// assets


// ==============================|| LANDING PAGE ||============================== //

export default function Landing() {
  const theme = useTheme();
  const { mode } = useConfig();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const listenToScroll = () => {
      const heightToHideFrom = 250;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHideFrom) {
        setVisible(true);
      } else {
        visible && setVisible(false);
      }
    };

    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, [visible]);





  return (
    <>
      <Box
        sx={{
          position: 'relative',
          bgcolor: mode === ThemeMode.DARK ? 'grey.0' : 'grey.800',
          overflow: 'hidden',
          minHeight: '100vh',
          '&>*': {
            position: 'relative',
            zIndex: 5
          },
          '&:before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 2,
            background:
              theme.direction === ThemeDirection.RTL
                ? {
                    xs: 'linear-gradient(-360.36deg, rgb(0, 0, 0) 14.79%, rgba(67, 67, 67, 0.28) 64.86%)',
                    md: 'linear-gradient(-329.36deg, rgb(0, 0, 0) 1.79%, rgba(67, 67, 67, 0.28) 64.86%)',
                    xl: 'linear-gradient(-329.36deg, rgb(0, 0, 0) 1.79%, rgba(67, 67, 67, 0.28) 64.86%)'
                  }
                : 'linear-gradient(329.36deg, rgb(0, 0, 0) 14.79%, rgba(67, 67, 67, 0.28) 64.86%)'
          }
        }}
      >
       <CardMedia
          component="img"
          image={`/assets/images/image8.png`}
          sx={{
            position: 'absolute',
            width: { md: '78%', lg: '70%', xl: '65%' },
            right: { md: '-14%', lg: '-4%', xl: '-2%' },
            top: { md: '16%', lg: '12%', xl: '8%' },
            zIndex: 1,
            display: { xs: 'none', md: 'block' }
          }}
        /> 
        <Hero />
      </Box>
      <FeatureBlock />
      <DemoBlock />
      <NumberBlock />
      <BrowserBlock />
      <ElementBlock />
      <PartnerBlock />
    </>
  );
}
