import React from 'react';
import styles from './index.module.sass';
const Index = (props: any) => {
  return (
    <div className={styles.sassContainer}>
      <div className={styles.board1}>board1</div>
      <div className={styles.board2}>board2</div>
    </div>
  );
};

export default Index;
