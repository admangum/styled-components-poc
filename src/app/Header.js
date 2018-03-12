import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {
  render() {
    const { className, children } = this.props;
    return (
      <div className={className}>
        <h1>App Header Component</h1>
        { children }
      </div>
    )
  }
}

export default styled(Header)`
  color: ${ props => props.theme.colors.primaryColor10 }
  background: ${ props => props.theme.colors.primaryColor60 }
  padding: 10px 20px;

  h1 {
    display: inline;
    font-size: 1.5em;
  }

  Button {
    float: right;
    margin: 1px;
  }
`