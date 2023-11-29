import Chat from './Chat';
import SignIn from './SignIn';
import { auth } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export function ChatView() {
  const [user] = useAuthState(auth);
  return (
    <div style={{ minHeight: '100vh', width: '100%', marginTop: '8px' }}>
      {user ? <Chat /> : <SignIn />}
    </div>
  );
}

export default ChatView;
