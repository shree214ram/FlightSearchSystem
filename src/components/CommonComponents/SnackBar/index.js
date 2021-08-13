import React from "react"
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default function SnackBar(props){

const [open, setOpen] = React.useState(props.open);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    
    setOpen(false);
    props.onToastClose();
  };

return(
  <Snackbar
  anchorOrigin={{ vertical:"top", horizontal:"right" }}
  open={open}
  onClose={handleClose}
  key={"top" + "right"}
  // anchorOrigin={{ vertical, horizontal }}
>
  <Alert elevation={6} variant="filled" onClose={handleClose} severity={props.type}>
    {props.message}
  </Alert>
</Snackbar>
)
}
