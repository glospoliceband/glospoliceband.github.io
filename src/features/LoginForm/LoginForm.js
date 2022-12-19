import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//
// Not secure to store the password in the source code but this doesn't allow
// access to sensitive information so if somebody can be bothered to hack this
// then good luck to them (they get to see the band's constitution and music database).
//
const PASSWORD_HASH = '40fa105b4c19d675ea7e819dbf82ceb7'
const MD5_FUNCTION = require('md5');
const USERNAME = 'glos.police.band.username';
const PASSWORD = 'glos.police.band.password';

const validateUsernamePassword = (username, password) => username && password && (MD5_FUNCTION(password) === PASSWORD_HASH);

export const LoginForm = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(validateUsernamePassword(sessionStorage.getItem(USERNAME), sessionStorage.getItem(PASSWORD)));
  const [failureMessage, setFailureMessage] = useState(null);

  const [emailAddress, setEmailAddress] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (event) => {
    if (validateUsernamePassword(emailAddress, password)) {
      setLoggedIn(true);
      sessionStorage.setItem(USERNAME, emailAddress);
      sessionStorage.setItem(PASSWORD, password);
    } else {
      setFailureMessage('Invalid password, please try again');
    }
  }

  if (isLoggedIn) {
    return (<div>{children}</div>);
  }

  return (
    <div>
      <Dialog open={true} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          {failureMessage && <Alert severity="warning">{failureMessage}</Alert>}
          <DialogContentText>
            To access the members area please enter your username and password.
          </DialogContentText>
          <TextField
            onChange={(event) => setEmailAddress(event.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            onChange={(event) => setPassword(event.target.value)}
            autoFocus={false}
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button component={Link} to="/#" color="primary">
            Cancel
          </Button>

          <Button onClick={handleSubmit} type="submit" color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
