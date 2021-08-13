import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog(props) {	
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={()=>props.handleConfirmation(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>props.handleConfirmation(false)} color="primary">
            Cancel
          </Button>
          {props.showConfirmButton && <Button onClick={()=>props.handleConfirmation(true)} color="primary" autoFocus>
            Agree
          </Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
}
