import React from 'react';

function Step5(props) {
    if (props.currentStep !== 5) {
      return null
    }
    return(
      <React.Fragment>
      <div className="form-group">
        <label htmlFor="password">What times are you unavailable?</label>
        {props.busyTimes.map((entry, index) => 
        <span key={index}>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={props.handleBusyName(index)}
              value={entry.name}
              />
            from 
            <input
              className="form-control"
              type="time"
              onChange={props.handleStartTime(index)}
              value={entry.startTime}
            />
            to 
            <input
              className="form-control"
              type="time"
              onChange={props.handleEndTime(index)}
              value={entry.endTime}
            />
            <button onClick={props.handleDelete(index)}>X</button>
            <br></br>
          </span>)}
        <button onClick={props.addQuestion} className="btn btn-secondary">Add another time</button>
      </div>
      </React.Fragment>
    );
  }

  export default Step5;
