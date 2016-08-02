import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import Snackbar from 'material-ui/Snackbar'
import { useDeps } from 'mantra-core'

const style = {
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
  backgroundImage: 'url(http://lorempixel.com/1920/1080/)'
}

const customContentStyle = {
  // width: '95%',
  maxWidth: '300px'
}

class LoginDialogImpl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorOpen: false,
      errorMessage: ''
    }
  }

  componentDidMount() {
  }

  emailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  passwordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  login() {
    console.log('Email: ' + this.state.email + ' password: ' + this.state.password)
    // Meteor.loginWithPassword(this.state.email, this.state.password, (error) => this.loginCallback(error));
    /*
     if(error){
     this.setState({
     errorOpen: true,
     errorMessage: error.message,
     });
     }
     */
  }

  loginCallback(error) {
    if (error) {
      console.log(error)
      // this.props.dispatch(toggleSnackbar(!this.props.snackbarOpen));
      /* this.setState({
       errorOpen: true,
       errorMessage: "test"
       });*/
    } else {
      console.log('Success')
      // this.props.dispatch(setUser(Meteor.user()));
    }
  }

  handleRequestClose() {
  }

  checkValid() {
    if (this.state.email !== '' && this.state.email !== ' ') {
      this.enableButton()
    } else {
      this.disableButton()
    }
  }

  enableButton() {
    this.setState({
      canSubmit: true
    })
  }

  disableButton() {
    this.setState({
      canSubmit: false
    })
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onMouseUp={() => this.props.onCancel()}
      />,
      <FlatButton
        type="submit"
        label="Login"
        secondary
        onMouseUp={() => this.login()}
        // disabled={!this.state.canSubmit}
      />
    ]

    return (
      <div className="loginDialog">
        <Dialog
          overlayStyle={style}
          title="Login"
          actions={actions}
          modal={false}
          contentStyle={customContentStyle}
          open={this.props.open}
        >

          {this.props.user ? this.props.user.email : null}
          <TextField
            value={this.state.email}
            onChange={(event) => this.emailChange(event)}
            floatingLabelText="E-Mail"
          />
          <br/>
          <TextField
            value={this.state.password}
            onChange={(event) => this.passwordChange(event)}
            floatingLabelText="Passwort"
            type="password"
          /><br/>

          <p>Du hast noch keinen Account?
            Hier geht es zu der Registrierung.
          </p>

          <p>Du hast dein Passwort vergessen?
            Hier geht es zu einem neuen Versuch.
          </p>
        </Dialog>
        <Snackbar
          open={this.state.errorOpen}
          message={this.state.errorMessage}
          autoHideDuration={4000}
          onRequestClose={(event) => this.handleRequestClose(event)}
        />
      </div>
    )
  }
}

const depsToPropsMapper = (context, actions) => ({
  user: context.Store.getState().user.user,
  snackbarOpen: actions.snackbarOpen
})

export const LoginDialog = useDeps(depsToPropsMapper)(LoginDialogImpl)
