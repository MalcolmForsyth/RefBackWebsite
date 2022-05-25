import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import Job from "../../static/job.jpg";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${Job})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={Job}
        alt="increase priority"
      />
      <Typography 
        color="inherit"
        align="center" 
        variant="h2" 
        marked="center"
        sx = {{pb: 4}}>
        Upgrade your Resume
      </Typography>
      {/* <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography> */}
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Get Started
      </Button>
      {/* <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography> */}
    </ProductHeroLayout>
  );
}