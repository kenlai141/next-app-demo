import { Button, Input } from '@mui/material';
import React from 'react';
import styles from './index.module.sass';
import { useRouter } from 'next/router';

const Index = (props: any) => {
  const router = useRouter();
  const handleLogin = () => {
    sessionStorage.setItem('sessionId', 'token');

    router.push('/marketplace');
  };

  return (
    <div className={styles.wrapper}>
      <Input
        className={styles.formItem}
        placeholder={'username'}
        style={{ display: 'inline-block' }}
      />
      <Input className={styles.formItem} placeholder={'password'} type="password" />
      <Button className={styles.formItem} variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default Index;
