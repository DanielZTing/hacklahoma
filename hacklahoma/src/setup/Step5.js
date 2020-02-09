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
        <span className="event-entry" key={index}>
            <span>I have </span>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={props.handleBusyName(index)}
              value={entry.name}
              />
            <span> from </span>
            <input
              className="form-control"
              type="time"
              onChange={props.handleStartTime(index)}
              value={entry.startTime}
            />
            <span> to </span>
            <input
              className="form-control"
              type="time"
              onChange={props.handleEndTime(index)}
              value={entry.endTime}
            />
            <button className="btn btn-small btn-secondary" onClick={props.handleDelete(index)}>X</button>
            <br></br>
          </span>)}
        <button onClick={props.addQuestion} className="btn btn-small btn-secondary">Add another time</button>
      </div>
      </React.Fragment>
    );
  }

  export default Step5;
