import { signInWithPopup } from 'firebase/auth';
import { Button, styled } from '@mui/material';

import { auth, provider } from '../firebase/firebase';
const SignInContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const SignInButton = styled(Button)({
  padding: '10px 20px',
  fontSize: '16px',
});

function SignIn() {
  const signInWithGoogle = () => signInWithPopup(auth, provider);

  return (
    <SignInContainer>
      <SignInButton
        variant='contained'
        color='primary'
        onClick={signInWithGoogle}
      >
        Sign In With Google
      </SignInButton>
    </SignInContainer>
  );
}

export default SignIn;
