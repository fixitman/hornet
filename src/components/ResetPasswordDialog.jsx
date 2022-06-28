import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase'

const ResetPasswordDialog = ({ sendTo, onEmailSuccess, onEmailFailure }) => {
  const [open, setOpen] = React.useState(false);
  const [formEmail, setEmail] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    handleClose()
    sendPasswordResetEmail(auth, formEmail)
      .then(() => onEmailSuccess(formEmail))
      .catch((error) => onEmailFailure(error.code))
  };

  React.useEffect(() => {
    setEmail(sendTo)
  }, [sendTo])

  return (
    <div>
      <Button variant='text' onClick={handleClickOpen}>
        Forgot Password
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reset Password?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            We can email you a link with instructions for resetting your password.
          </DialogContentText>
          <TextField
            name="resetEmail" id="resetEmail"
            label="Email Address" type="email"
            variant="standard" margin="dense"
            autoFocus fullWidth
            value={formEmail}
            onChange={(e) => { setEmail(e.target.value) }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSend}>Yes, send it.</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ResetPasswordDialog;
