import React from 'react';
import logo from './android-chrome-512x512.png';
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
          <Header></Header>
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
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="mainHeader"><img src={logo}/><div className="inline-block"><h1>Quetzal</h1><b>Automatic scheduling, done right.</b></div></div>
    );
  }
}
export default App;
