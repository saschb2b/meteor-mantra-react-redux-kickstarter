import React from 'react'
import { RaisedButton } from 'material-ui'

export default class ProfileMenu extends React.Component {
  onLogin() {
    console.log('login')
    Meteor.loginWithGithub({
      requestPermissions: ['user', 'public_repo']
    }, (err) => {
      if (err)
        Session.set('errorMessage', err.reason || 'Unknown error')
    })
  }

  render() {
    return (
      <RaisedButton
        label="Login"
        style={{ margin: 12 }}
        onTouchTap={() => this.onLogin()}
      />
    )
  }
}
