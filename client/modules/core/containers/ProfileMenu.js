import { composeWithTracker } from 'react-komposer'
import ProfileMenu from '../components/ProfileMenu'

function composer(props, onData) {
  const user = Meteor.user()

  function onLogin() {
    Meteor.loginWithGithub({
      requestPermissions: ['user', 'public_repo']
    }, (err) => {
      if (err) {
        Session.set('errorMessage', err.reason || 'Unknown error')
      }
    })
  }

  function onLogout() {
    Meteor.logout()
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

export default composeWithTracker(composer)(ProfileMenu)
