import React from 'react';
import styles from './Grid.module.css';

const Grid = (props: any) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.divItem}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div className={styles.divItem}>
          qui dolorem ipsum quia dolor sit amet circumstances occur in which toil and pain can
        </div>
        <div className={styles.divItem}>Ut enim ad minima veniam</div>
        <div className={styles.divItem}>because it is pleasure</div>
        <div className={styles.divItem}>
          because it is pain, but because occasionally circumstances occur in which toil and pain
          can procure him some great pleasure
        </div>
        <div className={styles.divItem}>
          similique sunt in culpa qui officia deserunt mollitia animi
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.item1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
        <div className={styles.item2}>
          qui dolorem ipsum quia dolor sit amet circumstances occur in which toil and pain can
        </div>
        <div className={styles.item3}>Ut enim ad minima veniam</div>
      </div>
    </>
  );
};

export default Grid;
