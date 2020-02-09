import React from 'react';

export default class darkModeToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: props.isChecked || false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({ isChecked: !this.state.isChecked })
        this.props.toggleDarkMode(this.state.isChecked);
    }
    render() {
        return (
            <label className="switch">
            <input id="" type="checkbox" className="toggle" value={this.state.isChecked} onChange={this.handleChange}/>
            <div className="slider"></div>
            </label>
        )
    }
    
    // toggleDarkMode = e = cn => {
    //     if(e.target.checked) {
    //       // Dark mode is on
    //       cn = "dark-mode";
    //     } else {
    //       // Dark mode is off
    //       cn = "";
    //     }
    //   }
}