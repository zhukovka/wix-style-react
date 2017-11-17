import React from 'react';
import Wix from 'Wix';
import WixStyleProvider from 'wix-style-react/dist/src/providers/WixStyleProvider';

export default function withTpaTheme(Component, themeCreator) {
  class TpaListener extends React.Component {
    constructor(props) {
      super(props);
      this.state = {theme: themeCreator()};
    }

    componentDidMount() {
      Wix.addEventListener(
        Wix.Events.SETTINGS_UPDATED,
        () => this.setState({theme: themeCreator()})
      );
    }

    componentWillUnmout() {
      Wix.removeEventListener(Wix.Events.SETTINGS_UPDATED);
    }

    render() {
      return (
        <WixStyleProvider theme={this.state.theme}>
          <Component/>
        </WixStyleProvider>
      );
    }
  }

  return TpaListener;
}

