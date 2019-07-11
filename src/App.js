import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    
  }
  render() {
    return (
      <div>
        <h1>Simple Calculator</h1>
      </div>
    )
  }
}
export default App;
