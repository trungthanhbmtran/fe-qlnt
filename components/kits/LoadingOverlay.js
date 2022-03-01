import React from 'react'
import { Backdrop, Modal, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Spinner } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4),
    borderRadius: 5,
  },
}));

export default function LoadingOverlay() {
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      className={classes.modal}
      open={true}
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 100,
      }}
    >
      <div className={classes.paper}>
        <Typography variant="h6" component="h6"><Spinner color="primary" /> Loading...</Typography>
      </div>
    </Modal>
  )
}
