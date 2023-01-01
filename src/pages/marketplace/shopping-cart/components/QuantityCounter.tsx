import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

enum Action {
  increment,
  decrement,
}

const QuantityCounter = (props: { qty: number; onChange?: (val: number) => void }) => {
  const [qty, setQty] = useState<number>(props.qty);

  let handleClick: React.MouseEventHandler = (e) => {
    const btn = e.currentTarget as HTMLButtonElement;
    let newVal = null;

    if (btn.dataset.action === String(Action.decrement)) {
      setQty((prev) => {
        newVal = prev - 1;
        return newVal;
      });
    } else if (btn.dataset.action === String(Action.increment)) {
      setQty((prev) => {
        newVal = prev + 1;
        return newVal;
      });
    }

    if (newVal !== null && props.onChange) props.onChange(newVal);
  };

  return (
    <Box style={{ display: 'flex', verticalAlign: 'center' }}>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
        data-action={Action.decrement}
        onClick={handleClick}
      >
        <RemoveIcon fontSize={'small'} />
      </IconButton>
      <Typography style={{ transform: 'translateY(0.4rem)' }}>&nbsp;{qty}&nbsp;</Typography>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
        data-action={Action.increment}
        onClick={handleClick}
      >
        <AddIcon fontSize={'small'} />
      </IconButton>
    </Box>
  );
};

export default QuantityCounter;
