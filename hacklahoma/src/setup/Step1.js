import React from 'react';
import './form-styles.css';
function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    }
    return(
      <div className="form-group">
        <label htmlFor="email" className = 'toplabel'>What's your name?</label>
        <input
          className="form-control"
          id="name"
          name="userName"
          type="text"
          placeholder="Your name here"
          value={props.userName}
          onChange={props.handleChange}
          />
      </div>
    );
  }

export default Step1;
