import React from 'react';
import { Sidenav } from './Sidenav.jsx';
import { MySnackbar } from './MySnackbar.jsx';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from '../../../../node_modules/material-ui/styles/getMuiTheme';

const styles = {
  content: {
    paddingLeft: 256,
    height: '100%',
  },
  contentMobile: {
    paddingLeft: 0,
    height: '100%',
  },
};

const title = 'Mantra Kickstart';
DocHead.setTitle(title);

const metaInfo = { name: 'viewport', content: 'width=device-width, initial-scale=1' };
DocHead.addMeta(metaInfo);

const fontInfo = { name: 'link', href: 'https://fonts.googleapis.com/css?family=Roboto:400,300,500', type: 'text/css' };
DocHead.addLink(fontInfo);

export class MainLayout extends React.Component {
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

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div>
        <Sidenav />
        <div style={!this.state.mobileView ? styles.content : styles.contentMobile}>
          {this.props.toolbar}
          {this.props.content}
        </div>
        <MySnackbar />
      </div>
    );
  }
}

MainLayout.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
