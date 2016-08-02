import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import { useDeps } from 'mantra-core'

const styles = {
  background: {
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundImage: 'url(http://lorempixel.com/1920/1080/)'
  },
  customContentStyle: {
    // width: '95%',
    maxWidth: '550px'
  },
  checkbox: {
    marginBottom: 16
  }
}

class RegistrationDialogImpl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  emailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  register() {
    console.log('Email: ' + this.state.email)
    // Meteor.call('createNewAccount', this.state.email, (error, result) => this.registerCallback(error, result));
  }

  registerCallback(error, result) {
    if (error) {
      console.log('Register fails')
      console.log(error)
    } else {
      // sign-in account
      console.log('Register success')
      if (result) {
        // Meteor.loginWithPassword(this.state.email, result[1]);
        // this.props.dispatch(setUser({ email: this.state.email }));
      }
      // report success & close overlay
    }
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onMouseUp={() => this.props.onCancel()}
      />,
      <FlatButton
        label="Register"
        secondary
        onMouseUp={() => this.register()}
      />
    ]

    return (
      <div className="registrationDialog">
        <Dialog
          overlayStyle={styles.background}
          title="Register"
          actions={actions}
          modal={false}
          contentStyle={styles.customContentStyle}
          open={this.props.open}
        >

          <TextField
            value={this.state.email}
            onChange={(event) => this.emailChange(event)}
            floatingLabelText="E-Mail"
          />

          <Checkbox
            label="Ich akzeptiere die allgemeinen Geschäftsbedingungen"
            style={styles.checkbox}
          />

          <Checkbox
            label="Ich akzeptiere die Datenschutzerklärung"
            style={styles.checkbox}
          />
        </Dialog>
      </div>
    )
  }
}

const depsToPropsMapper = (context, actions) => ({
  user: context.Store.getState().user.user
})

export const RegistrationDialog = useDeps(depsToPropsMapper)(RegistrationDialogImpl)
