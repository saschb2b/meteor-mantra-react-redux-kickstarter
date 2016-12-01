import React, { Component, PropTypes } from 'react'
import Snackbar from 'material-ui/Snackbar'

export default class MySnackbar extends Component {
  render() {
    return (
      <div>
        <Snackbar
          open={this.props.open}
          message={this.props.message}
          autoHideDuration={3000}
          onRequestClose={this.props.onRequestClose}
        />
      </div>
    )
  }
}

MySnackbar.propTypes = {
  message: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}
