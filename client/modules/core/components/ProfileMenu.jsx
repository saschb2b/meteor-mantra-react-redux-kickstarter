import React, { Component, PropTypes } from 'react'
import { RaisedButton } from 'material-ui'

export default class ProfileMenu extends Component {
  render() {
    const { user } = this.props

    return (
      <div>
        {!user ?
          <RaisedButton
            label="Login"
            style={{ margin: 12 }}
            onTouchTap={this.props.onLogin}
          />
          :
          <div>
            <p>Hello {user.profile.name}</p>
            <RaisedButton
              label="Logout"
              style={{ margin: 12 }}
              onTouchTap={this.props.onLogout}
            />
          </div>
        }
      </div>
    )
  }
}

ProfileMenu.propTypes = {
  user: PropTypes.object,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onProfile: PropTypes.func.isRequired
}
