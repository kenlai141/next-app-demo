import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React, { ReactNode } from 'react';

enum DialogBtnActions {
  success,
  cancel,
  reset,
}

interface CustomDialogProps {
  open: boolean;
  onClose: (action: DialogBtnActions) => void;
  title: string | ReactNode;
  content: string | ReactNode;
  successBtnTxt?: string;
  cancelBtnText?: string;
  resetBtnText?: string;
}

const CustomDialog = ({
  open,
  onClose: handleClose,
  title,
  content,
  successBtnTxt = 'Confirm',
  cancelBtnText = 'Cancel',
  resetBtnText,
}: CustomDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {resetBtnText && (
          <Button onClick={() => handleClose(DialogBtnActions.reset)}>{resetBtnText}</Button>
        )}
        <Button onClick={() => handleClose(DialogBtnActions.cancel)}>{cancelBtnText}</Button>
        <Button onClick={() => handleClose(DialogBtnActions.success)} autoFocus>
          {successBtnTxt}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
