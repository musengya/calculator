import React from 'react';
import KeyPadComponent from "./KeyPadComponent"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  render() {
    return (
      <div>
        <h1>Simple Calculator</h1>
        <KeyPadComponent />
      </div>
    )
  }
}
export default App;
