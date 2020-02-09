import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './setup/cloud-styles.css'
import Form from './Form.js';
import DarkModeToggle from './DarkModeToggle.js';
import './darkmode.css';

function App() {
  return (
    <Container></Container>
  );
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cn: "light-mode"
    }
  }
  render() {
    return (
      <div className={this.state.cn}>
          <DarkModeToggle toggleDarkMode={this.toggleDarkMode}></DarkModeToggle>
          <Form></Form>
      </div>
    )
  }

  toggleDarkMode= isChecked => {
    if(!isChecked) {
      this.setState({cn: "dark-mode"});
    } else {
      this.setState({cn: "light-mode"});
    }
    console.log(this.state.cn);
  }
}

export default App;
