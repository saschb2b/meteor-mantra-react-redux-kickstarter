import React from 'react'
import { connect } from 'react-redux'
import Snackbar from 'material-ui/Snackbar'
import { toggleSnackbar } from '../actions'

class MySnackbarImpl extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleRequestClose() {
    this.props.dispatch(toggleSnackbar(!this.props.store.getState().snackbar.snackbarOpen))
  }

  render() {
    return (
      <div>
        <Snackbar
          open={this.props.snackbarOpen}
          message={"Change this text to something useful"}
          autoHideDuration={3000}
          onRequestClose={() => this.handleRequestClose()}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  snackbarOpen: state.snackbar.snackbarOpen
})

export const MySnackbar = connect(mapStateToProps)(MySnackbarImpl)
