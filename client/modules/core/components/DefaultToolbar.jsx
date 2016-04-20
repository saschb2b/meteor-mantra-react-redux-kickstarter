import React from 'react';
import AppBar from 'material-ui/AppBar';
import { useDeps } from 'mantra-core';

const styles = {
  content: {
    // position: "fixed",
    // minHeight: 0,
    height: 300,
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundImage: 'url(http://lorempixel.com/1600/300/nature)',
  },
  title: {},
};

class DefaultToolbarImpl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileView: window.innerWidth < 1024,
    };

    this.handleResize = () => {
      this.setState({
        mobileView: window.innerWidth < 1024,
      });
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  toggleMenu() {
    console.log(this.props.menuOpen);
    if (this.state.mobileView) {
      this.props.store.dispatch(this.props.toggleMenu(this.props.menuOpen));
    }
  }

  render() {
    return (
      <div>
        <AppBar
          style={styles.content}
          title={this.props.title}
          titleStyle={styles.title}
          onLeftIconButtonTouchTap={() => this.toggleMenu()}
          showMenuIconButton={this.state.mobileView}
        />
      </div>
    );
  }
}

const depsToPropsMapper = (context, actions) => ({
  menuOpen: context.Store.getState().menu.menuOpen,
  store: context.Store,
  toggleMenu: actions.post.toggleMenu,
});

export const DefaultToolbar = useDeps(depsToPropsMapper)(DefaultToolbarImpl);
