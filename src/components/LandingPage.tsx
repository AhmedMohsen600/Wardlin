import { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { Typography, Container, Grid } from '@mui/material';

const Section = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.spacing(1),
  transition: 'transform 0.3s ease-in-out, opacity 0.8s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  marginBottom: theme.spacing(10),
}));

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Container sx={{ minHeight: '100vh', marginTop: '13%' }}>
      {/* Section 1 */}
      <Grid
        container
        spacing={3}
        component={Section}
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <Grid item xs={12}>
          <Typography variant='h4'>Welcome to Our Landing Page</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            This is the first section. Feel free to customize the content and
            styles.
          </Typography>
        </Grid>
      </Grid>

      {/* Section 2 */}
      <Grid
        container
        spacing={3}
        component={Section}
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <Grid item xs={12}>
          <Typography variant='h4'>Our Services</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Explore our services and discover how we can help you achieve your
            goals.
          </Typography>
        </Grid>
      </Grid>

      {/* Section 3 */}
      <Grid
        container
        spacing={3}
        component={Section}
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <Grid item xs={12}>
          <Typography variant='h4'>Contact Us</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Have questions or need assistance? Contact us to get in touch with
            our team.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
