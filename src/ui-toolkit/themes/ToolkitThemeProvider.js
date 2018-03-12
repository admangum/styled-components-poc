import HigTheme from './HigTheme';
import React from 'react';
import { ThemeProvider } from 'styled-components';


class ToolkitThemeProvider extends React.Component {
  render() {
    return (
      <ThemeProvider theme={HigTheme}>
        { this.props.children }
      </ThemeProvider>
    );
  }
}

export default ToolkitThemeProvider;