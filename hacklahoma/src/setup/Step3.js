import React from 'react';

function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    }
    return(
      <React.Fragment>
      <div className="form-group">
        <p>What time do you eat...</p>

        <span className="event-entry">
          <label className="inline"><b>Breakfast?</b></label> From
          <input className="form-control" id="breakfastStartTime" name="breakfastStartTime" value={props.breakfastStartTime} onChange={props.handleChange} type="time"></input> to 
          <input className="form-control" id="breakfastEndTime" name="breakfastEndTime" value={props.breakfastEndTime} onChange={props.handleChange} type="time"></input>. 
          <button className="btn btn-small btn-secondary">I don't eat breakfast.</button>
          <br></br>
        </span>

        <span className="event-entry">
        <label className="inline"><b>Lunch?</b></label> From
        <input className="form-control" id="lunchStartTime" name="lunchStartTime" value={props.lunchStartTime} onChange={props.handleChange} type="time"></input> to 
        <input className="form-control" id="lunchEndTime" name="lunchEndTime" value={props.lunchEndTime} onChange={props.handleChange} type="time"></input>. 
        <br></br>
        </span>

        <span className="event-entry">
        <label className="inline"><b>Dinner?</b></label> From
        <input className="form-control" id="dinnerStartTime" name="dinnerStartTime" value={props.dinnerStartTime} onChange={props.handleChange} type="time"></input> to 
        <input className="form-control" id="dinnerEndTime" name="dinnerEndTime" value={props.dinnerEndTime} onChange={props.handleChange} type="time"></input>. 
        </span>
      </div>
      </React.Fragment>
    );
  }

  export default Step3;
