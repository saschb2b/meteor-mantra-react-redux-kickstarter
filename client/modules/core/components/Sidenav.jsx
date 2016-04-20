import React from 'react';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';

import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import LibraryBooksIcon from 'material-ui/svg-icons/av/library-books';
import WorkIcon from 'material-ui/svg-icons/action/work';
import ForumIcon from 'material-ui/svg-icons/communication/forum';
import ViewAgendaIcon from 'material-ui/svg-icons/action/view-agenda';
import HourglassEmptyIcon from 'material-ui/svg-icons/action/hourglass-empty';
import EmailIcon from 'material-ui/svg-icons/communication/email';

import { ImpressumDialog } from './dialogs/ImpressumDialog.jsx';
import { AGBDialog } from './dialogs/AGBDialog.jsx';
import { DSEDialog } from './dialogs/DSEDialog.jsx';
import { ProfileMenu } from './ProfileMenu.jsx';

import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { useDeps } from 'mantra-core';

class SidenavImpl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileView: window.innerWidth < 1024,
      open: false,
      loginOpen: false,
      registerOpen: false,
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

  impressumOpen() {
    this.setState({ impressumOpen: true });
  }

  onImpressumCancel() {
    this.setState({ impressumOpen: false });
  }

  agbOpen() {
    this.setState({ agbOpen: true });
  }

  onAGBCancel() {
    this.setState({ agbOpen: false });
  }

  dseOpen() {
    this.setState({ dseOpen: true });
  }

  onDSECancel() {
    this.setState({ dseOpen: false });
  }

  handleClose() {
    if (this.state.mobileView) {
      this.props.store.dispatch(this.props.toggleMenu(this.props.menuOpen));
    }
  }

  render() {
    return (
      <div>
        <Drawer
          docked={!this.state.mobileView}
          open={this.state.mobileView ? this.props.menuOpen : true}
          onRequestChange={() => this.handleClose()}
        >
          <ProfileMenu />

          <List>
            <ListItem
              leftIcon={<DashboardIcon />}
              linkButton={true} href="/news"
              primaryText="News"
              onTouchTap={() => this.handleClose()}
            />
            <ListItem
              leftIcon={<LibraryBooksIcon />}
              linkButton={true} href="/item2"
              primaryText="Item 2"
              onTouchTap={() => this.handleClose()}
            />
            <ListItem
              leftIcon={<WorkIcon />}
              linkButton={true} href="/item3"
              primaryText="Item 3"
              onTouchTap={() => this.handleClose()}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                    leftIcon={<ForumIcon />}
                    linkButton={true} href="/item3/subitem1"
                    primaryText="Subitem 1"
                    key={1}
                    onTouchTap={() => this.handleClose()}
                />,
                <ListItem
                    leftIcon={<ViewAgendaIcon />}
                    linkButton={true} href="/item3/subitem1"
                    primaryText="Subitem 2"
                    key={2}
                    onTouchTap={() => this.handleClose()}
                />,
                <ListItem
                    leftIcon={<HourglassEmptyIcon />}
                    linkButton={true} href="/item3/subitem1"
                    primaryText="Subitem 3"
                    key={3}
                    onTouchTap={() => this.handleClose()}
                />,
              ]}
            />

            <Divider />

            <ListItem
              leftIcon={<EmailIcon />}
              linkButton={true} href="/contact"
              primaryText="Contact"
              onTouchTap={() => this.handleClose()}
            />
          </List>

          <FlatButton
            label="Impressum"
            onTouchTap={() => this.impressumOpen()}
          />

          <FlatButton
            label="AGB"
            onTouchTap={() => this.agbOpen()}
          />

          <FlatButton
            label="Datenschutzbestimmungen"
            onTouchTap={() => this.dseOpen()}
          />

          <ImpressumDialog
            open={this.state.impressumOpen}
            onCancel={() => this.onImpressumCancel()}
            onRequestClose={() => this.onImpressumCancel()}
          />

          <AGBDialog
            open={this.state.agbOpen}
            onCancel={() => this.onAGBCancel()}
            onRequestClose={() => this.onAGBCancel()}
          />

          <DSEDialog
            open={this.state.dseOpen}
            onCancel={() => this.onDSECancel()}
            onRequestClose={() => this.onDSECancel()}
          />
        </Drawer>
      </div>
    );
  }
}

const depsToPropsMapper = (context, actions) => ({
  user: context.Store.getState().user.user,
  menuOpen: context.Store.getState().menu.menuOpen,
  store: context.Store,
  toggleMenu: actions.post.toggleMenu,
});

export const Sidenav = useDeps(depsToPropsMapper)(SidenavImpl);