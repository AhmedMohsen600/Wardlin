// ** React
import { useState, useEffect } from 'react';

// ** MUI
import { Button, Paper, Avatar, Typography, styled } from '@mui/material';
import SendMessage from './SendMessage';

// ** firebase
import {
  collection,
  query,
  limit,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';

import { Theme } from '@mui/system';

const ChatContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  gap: '20px',
});

const MessageContainer = styled(Paper)(
  ({ theme, isCurrentUser }: { theme?: Theme; isCurrentUser: boolean }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme!.spacing(2),
    gap: theme!.spacing(2),
    justifyContent: isCurrentUser ? 'flex-start' : 'flex-end',
    width: '100%',
    maxWidth: '600px',
  })
);

const Message = styled('div')(
  ({ theme, isCurrentUser }: { theme?: Theme; isCurrentUser: boolean }) => ({
    display: 'flex',
    alignItems: isCurrentUser ? 'flex-start' : 'flex-end',
    justifyContent: isCurrentUser ? 'flex-start' : 'flex-end',
    '& img': {
      marginRight: theme!.spacing(2),
    },
  })
);

const Chat = () => {
  const [messages, setMessages] = useState([]);
  // @ts-ignore
  const { userID } = auth.currentUser;

  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      orderBy('createdAt'),
      limit(50)
    );
    const data = onSnapshot(q, (QuerySnapshot) => {
      let messages: any = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => data as unknown as void;
  }, []);

  return (
    <ChatContainer>
      <Button
        onClick={() => auth.signOut()}
        variant='outlined'
        color='secondary'
      >
        Sign Out
      </Button>

      <MessageContainer
        isCurrentUser={userID === auth.currentUser?.uid}
        elevation={3}
      >
        {messages &&
          messages.map((message: any, id) => (
            <Message isCurrentUser={userID === auth.currentUser?.uid} key={id}>
              <Avatar src={message.photoURL} alt='User Avatar' />

              <Typography variant='body1'>{message.text}</Typography>
            </Message>
          ))}
      </MessageContainer>

      <SendMessage />
    </ChatContainer>
  );
};

export default Chat;
