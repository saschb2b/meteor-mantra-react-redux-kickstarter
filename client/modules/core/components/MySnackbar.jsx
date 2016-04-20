import React from 'react';
import Snackbar from 'material-ui/Snackbar';

import { toggleSnackbar } from '../actions';
import { useDeps } from 'mantra-core';

class MySnackbarImpl extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleRequestClose() {
    this.props.store.dispatch(toggleSnackbar(!this.props.store.getState().snackbar.snackbarOpen));
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
    );
  }
}

const depsToPropsMapper = (context, actions) => ({
  store: context.Store,
});

export const MySnackbar = useDeps(depsToPropsMapper)(MySnackbarImpl);
