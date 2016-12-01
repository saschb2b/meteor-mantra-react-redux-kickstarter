import { composeWithTracker } from 'react-komposer'
import { connect } from 'react-redux'
import Toolbar from '../components/Toolbar'
import { toggleMenu } from '../actions/index'

function composer(props, onData) {
  function onToggleMenu() {
    if (props.mobileView) {
      props.dispatch(toggleMenu())
    }
  }

  onData(null, {
    onToggleMenu
  })
}

const mapStateToProps = (state) => ({
  menuOpen: state.menu.menuOpen,
  mobileView: state.window.mobileView
})


export default connect(mapStateToProps)(composeWithTracker(composer)(Toolbar))
