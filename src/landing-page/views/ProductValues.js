import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import referral from '../../static/referral.png';
import shield from '../../static/shield.png';
import checkmarks from '../../static/checkmarks.png';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
                <Box
                component="img"
                src={checkmarks}
                alt="checkmarks"
                sx={{ height: 55 }}
                />
              <Typography variant="h6" sx={{ my: 5 }}>
                Verifying your Experience
              </Typography>
              <Typography variant="h5">
                {
                  'By ensuring that your resume has been verified by a manager, '
                }
                {
                    'you can stand out from the crowd in a unique way'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={shield}
                alt="shield"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Preventing Fraud
              </Typography>
              <Typography variant="h5">
                {
                  'With the ever-growing competitive nature of the job market, '
                }

                {'resume-based fraud is at an all-time high'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={referral}
                alt="referral"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Fetching Referrals
              </Typography>
              <Typography variant="h5">
                {'Referrals are the most sure-fire way to communicate authenticity, '}
                {'and we are here to help you find them without pestering your friends.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;