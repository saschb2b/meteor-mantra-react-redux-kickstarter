import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { LoginDialog } from './dialogs/LoginDialog'
import { RegistrationDialog } from './dialogs/RegistrationDialog'

export class ProfileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginOpen: false,
      registerOpen: false
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginCancel() {
    this.setState({ loginOpen: false })
  }

  onRegisterCancel() {
    this.setState({ registerOpen: false })
  }

  registerOpen() {
    this.setState({ registerOpen: true })
  }

  loginOpen() {
    this.setState({ loginOpen: true })
  }

  render() {
    return (
      <div>
        <div>
          <RaisedButton
            label="Login"
            style={{ margin: 12 }}
            onMouseUp={() => this.loginOpen()}
          />
          <RaisedButton
            label="Register"
            style={{ margin: 12 }}
            onMouseUp={() => this.registerOpen()}
          />
        </div>

        <LoginDialog
          open={this.state.loginOpen}
          onCancel={() => this.onLoginCancel()}
          onRequestClose={() => this.onLoginCancel()}
        />

        <RegistrationDialog
          open={this.state.registerOpen}
          onCancel={() => this.onRegisterCancel()}
          onRequestClose={() => this.onRegisterCancel()}
        />
      </div>
    )
  }
}
