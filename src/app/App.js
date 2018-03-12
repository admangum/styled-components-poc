import React from 'react';
import { ToolkitThemeProvider, Button } from 'ui-toolkit';
import Header from './Header';
class App extends React.Component {
  render() {
    return (
      <ToolkitThemeProvider>
        <div>
          <Header>
            <Button>Toolkit button</Button>
          </Header>
        </div>
      </ToolkitThemeProvider>
    );
  }
}

export default App;