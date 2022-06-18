import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const  ResetPasswordDialog = ({ sendTo}) => {
  const [open, setOpen] = React.useState(false);
  const [formEmail, setEmail] = React.useState(sendTo)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    setOpen(false);
    alert(`sending email to ${formEmail}`);
  };

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
            name="resetEmail"
            id="resetEmail"
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={formEmail}
            onChange={(e)=>{
                setEmail(e.target.value)                
            }}
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
