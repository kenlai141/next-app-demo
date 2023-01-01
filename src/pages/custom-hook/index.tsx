import React, { MouseEventHandler, useState } from 'react';
import styles from './custom-hook.module.css';
import classnames from 'classnames';
import useCounter from '@hooks/use-counter';

const Index = ({ defaultValue = 0, duration = 30 }: { defaultValue: number; duration: number }) => {
  const [amount, setAmount] = useState<number>(defaultValue);
  const { label, isDisabled, startCounter } = useCounter({
    label: 'Send Code',
    duration: duration,
  });

  const handleSendCode = () => {
    console.log('Send Code');
    startCounter();
  };

  const handleAmountChange: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log('Change amount');

    const button = e.target as HTMLButtonElement;

    if (button.id === 'decrement-btn') {
      setAmount((prev) => prev - 1);
    } else if (button.id === 'increment-btn') {
      setAmount((prev) => prev + 1);
    } else {
      console.error(new Error('Invalid event.'));
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={classnames(styles.row, {
          [styles.formGroup]: true,
        })}
      >
        <label className={styles.formLabels} htmlFor="verification-code">
          Verification Code
        </label>
        <input type="text" id="verification-code" />
        <button disabled={isDisabled} onClick={handleSendCode} className={styles.sendCodeBtn}>
          {label}
        </button>
      </div>
      <div
        className={classnames(styles.row, {
          [styles.formGroup]: true,
        })}
      >
        <button id="decrement-btn" onClick={handleAmountChange} className={styles.sendCodeBtn}>
          -
        </button>
        <input type="text" id="amount" value={amount} readOnly style={{ textAlign: 'center' }} />
        <button id="increment-btn" onClick={handleAmountChange} className={styles.sendCodeBtn}>
          +
        </button>
      </div>
    </div>
  );
};

export default Index;
