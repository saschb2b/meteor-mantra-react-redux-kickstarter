import { composeWithTracker } from 'react-komposer'
import { connect } from 'react-redux'
import MySnackbar from '../components/MySnackbar'
import { toggleSnackbar } from '../actions'

function composer(props, onData) {
  function onRequestClose() {
    props.dispatch(toggleSnackbar())
  }

  onData(null, {
    onRequestClose
  })
}

const mapStateToProps = state => ({
  open: state.snackbar.open,
  message: state.snackbar.message
})


export default connect(mapStateToProps)(composeWithTracker(composer)(MySnackbar))
