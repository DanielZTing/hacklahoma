import React from 'react';

function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    }
    return(
      <React.Fragment>
      <div className="form-group">
        <p>What time do you eat...</p>

        <label className="inline">Breakfast?</label> From
        <input class="form-control" id="breakfastStartTime" name="breakfastStartTime" value={props.breakfastStartTime} onChange={props.handleChange} type="time"></input> to 
        <input class="form-control" id="breakfastEndTime" name="breakfastEndTime" value={props.breakfastEndTime} onChange={props.handleChange} type="time"></input>. 
        <button class="btn btn-small btn-secondary">I don't eat breakfast.</button>
        <br></br>

        <label className="inline">Lunch?</label> From
        <input class="form-control" id="lunchStartTime" name="lunchStartTime" value={props.lunchStartTime} onChange={props.handleChange} type="time"></input> to 
        <input class="form-control" id="lunchEndTime" name="lunchEndTime" value={props.lunchEndTime} onChange={props.handleChange} type="time"></input>. 
        <br></br>

        <label className="inline">Dinner?</label> From
        <input class="form-control" id="dinnerStartTime" name="dinnerStartTime" value={props.dinnerStartTime} onChange={props.handleChange} type="time"></input> to 
        <input class="form-control" id="dinnerEndTime" name="dinnerEndTime" value={props.dinnerEndTime} onChange={props.handleChange} type="time"></input>. 
      </div>
      </React.Fragment>
    );
  }

  export default Step3;
