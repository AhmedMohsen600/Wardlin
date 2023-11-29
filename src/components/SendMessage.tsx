import React, { useState } from 'react';
import { Button, TextField, styled } from '@mui/material';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';
import { User } from 'firebase/auth';
const SendMessageContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '600px',
});

const InputField = styled(TextField)({
  flex: 1,
  marginRight: '10px',
});

const SendMessageButton = styled(Button)({
  marginLeft: '10px',
});

function SendMessage() {
  const [msg, setMsg] = useState('');
  const messagesRef = collection(db, 'messages');

  const sendMsg = async () => {
    const { uid, photoURL } = auth.currentUser as User;

    await addDoc(messagesRef, {
      text: msg,
      createdAt: serverTimestamp(),
      uid,
      photoURL: photoURL,
    });
    setMsg('');
  };

  return (
    <SendMessageContainer>
      <InputField
        placeholder='Message...'
        variant='outlined'
        size='small'
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <SendMessageButton variant='contained' color='primary' onClick={sendMsg}>
        Send
      </SendMessageButton>
    </SendMessageContainer>
  );
}

export default SendMessage;
