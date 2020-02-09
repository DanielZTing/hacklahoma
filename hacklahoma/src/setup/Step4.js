import React from 'react';

function Step4(props) {
    if (props.currentStep !== 4) {
      return null
    }
    return(
      <React.Fragment>
      <div className="form-group">
        <label htmlFor="password">What times are you unavailable?</label>
        {props.busyTimes.map((entry, index) => 
        <span key={index}>
            <input
              type="time"
              onChange={props.handleStartTime(index)}
              value={entry.startTime}
            />
            <input
              type="time"
              onChange={props.handleEndTime(index)}
              value={entry.endTime}
            />
            <button onClick={props.handleDelete(index)}>X</button>
          </span>)}
        <button onClick={props.addQuestion} className="btn">Add another time</button>
      </div>
      <button className="btn btn-success btn-block">Sign up</button>
      </React.Fragment>
    );
  }

  export default Step4;
