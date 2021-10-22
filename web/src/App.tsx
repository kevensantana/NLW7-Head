import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';

import { useContext } from 'react';
import { AuthContext } from './contexts/auth';
import { SendMessageFrom } from './components/SendMessageFrom';

import styles from './App.module.scss';

export function App() {

  const { user } = useContext(AuthContext);

  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
      <MessageList />
      { !!user ? <SendMessageFrom /> : <LoginBox />}
    </main>
  ) 
}


