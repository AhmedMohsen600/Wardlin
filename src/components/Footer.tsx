import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '20px 0',
        textAlign: 'center',
      }}
    >
      <Typography variant='body2'>
        Contact: your@email.com | Follow us on:{' '}
        <a href='https://twitter.com/your_twitter' style={{ color: 'white' }}>
          Twitter
        </a>
      </Typography>
      <Typography variant='body2'>
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </Typography>
    </div>
  );
};

export default Footer;
