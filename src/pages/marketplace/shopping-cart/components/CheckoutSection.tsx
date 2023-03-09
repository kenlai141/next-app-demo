import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Dialog from '@components/Dialog/CustomDialog';

const CheckoutSection = ({ totalAmount }: any) => {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  const openCheckoutDialog = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = (action: any) => {
    setDialogOpen(false);
  };

  return (
    <Box
      style={{
        flexGrow: 0,
        backgroundColor: '#AAAAAA',
        height: '420px',
        width: '200px',
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" style={{ padding: '20px 30px' }}>
        Total
      </Typography>
      <Typography variant="body1" style={{ padding: '20px 20px' }}>
        {totalAmount}
      </Typography>
      <Button variant="contained" onClick={openCheckoutDialog}>
        Check out
      </Button>
      <Dialog
        content={'Are you going to checkout?'}
        onClose={handleDialogClose}
        open={isDialogOpen}
        title={'Check Out'}
      />
    </Box>
  );
};

export default CheckoutSection;
