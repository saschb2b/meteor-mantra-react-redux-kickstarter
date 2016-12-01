import { composeWithTracker } from 'react-komposer'
import { connect } from 'react-redux'
import { toggleSnackbar } from '../actions'
import ProfileMenu from '../components/ProfileMenu'

function composer(props, onData) {
  const user = Meteor.user()

  function onLogin() {
    Meteor.loginWithGithub({
      requestPermissions: ['user', 'public_repo']
    }, (err) => {
      if (err) {
        props.dispatch(toggleSnackbar(err.reason))
      }
    })
  }

  function onLogout() {
    Meteor.logout()
    props.dispatch('Logged out')
  }

  function onProfile() {
    FlowRouter.go('/user')
  }

  onData(null, {
    user,
    onLogin,
    onLogout,
    onProfile
  })
}

export default connect()(composeWithTracker(composer)(ProfileMenu))
