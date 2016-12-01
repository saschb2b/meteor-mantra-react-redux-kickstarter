import React from 'react'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import { Provider } from 'react-redux'
import { useDeps } from 'mantra-core'
import { Sidenav } from './Sidenav'
import MySnackbar from '../containers/MySnackbar'
import getMuiTheme from '../../../../node_modules/material-ui/styles/getMuiTheme'

const styles = {
  content: {
    paddingLeft: 256,
    height: '100%'
  },
  contentMobile: {
    paddingLeft: 0
  }
}

const title = 'Mantra Kickstart'
DocHead.setTitle(title)

const metaInfo = { name: 'viewport', content: 'width=device-width, initial-scale=1' }
DocHead.addMeta(metaInfo)

const fontInfo = { name: 'link', href: 'https://fonts.googleapis.com/css?family=Roboto:400,300,500', type: 'text/css' }
DocHead.addLink(fontInfo)

class MainLayoutImpl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileView: window.innerWidth < 1024
    }

    this.handleResize = () => {
      this.setState({
        mobileView: window.innerWidth < 1024
      })
    }
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Provider store={this.props.store}>
          <div style={{ height: '100%' }}>
            <Sidenav />
            <div style={!this.state.mobileView ? styles.content : { ...styles.content, ...styles.contentMobile }}>
              {this.props.toolbar}
              <div style={this.props.toolbar && this.props.toolbar.props && this.props.toolbar.props.transparent ? {} : { marginTop: 64 }}>
                {this.props.content}
              </div>
            </div>
            <MySnackbar />
          </div>
        </Provider>
      </div>
    )
  }
}

MainLayoutImpl.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

const depsToPropsMapper = (context, actions) => ({
  store: context.Store
})

export const MainLayout = useDeps(depsToPropsMapper)(MainLayoutImpl)
