import { Input, InputLabel } from '@mui/material';
import React from 'react';
import styles from './index.module.sass';

const Index = (props: any) => {
  return (
    <div style={{ backgroundColor: '#FFFFFF', padding: '1em' }}>
      <InputLabel>Email</InputLabel>
      <Input className={styles.MuiInputRoot} />
    </div>
  );
};
export default Index;
