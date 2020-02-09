import React from 'react';

function Step4(props) {
  if (props.currentStep !== 4) {
    return null
  }
  return(
    <React.Fragment>
    <div className="form-group">
      <label htmlFor="sleepTime">When do you plan to sleep?</label>
      <input
        className="form-control"
        id="sleepTime"
        name="sleepTime"
        type="time"
        value={props.sleepTime}
        onChange={props.handleChange}
        />

      <label htmlFor="wakeTime">When do you plan to wake up?</label>
      <input
        className="form-control"
        id="wakeTime"
        name="wakeTime"
        type="time"
        value={props.wakeTime}
        onChange={props.handleChange}
        />
    </div>
    </React.Fragment>
  );
}

export default Step4;
