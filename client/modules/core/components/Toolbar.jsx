import React, { Component, PropTypes } from 'react'
import { AppBar } from 'material-ui'

const styles = {
  root: {
    position: 'fixed',
    top: 0,
    boxShadow: null
  },
  transparent: {
    backgroundColor: null,
    boxShadow: null,
    backgroundImage: '-webkit-gradient(linear, left top, left bottom, from(rgba(50,50,50,0.8)), to(rgba(80,80,80,0.0))'
  }
}

export default class Toolbar extends Component {
  render() {
    return (
      <AppBar
        style={this.props.transparent ? { ...styles.root, ...styles.transparent } : styles.root}
        title={this.props.title}
        onLeftIconButtonTouchTap={this.props.onToggleMenu}
      />
    )
  }
}

Toolbar.propTypes = {
  transparent: PropTypes.bool,
  title: PropTypes.string,
  onToggleMenu: PropTypes.func.isRequired,
}
