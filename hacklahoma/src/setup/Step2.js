import React from 'react';
import DayImage from '../assets/filler_day.svg';
import NightImage from '../assets/filler_night.svg';

function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    }
    return(
      <div className="form-group">
        <label htmlFor="timeOfDay">Would you describe yourself as a...</label>
        <div class="inline-block">
          <label className="radioLabel" htmlFor="n-option">
            Night Owl
            <img src={NightImage}/>
          </label>

          <input
              className=""
              id="n-option"
              name="timeOfDay"
              type="radio"
              value="night_owl"
              onChange={props.handleChange}
              />
          <div className="radio-option"></div>

        </div>

        <div class="inline-block">
        <label className="radioLabel" htmlFor="t-option">
          Lark
          <img src={DayImage}/>
        </label>
        <input
            className=""
            id="t-option"
            name="timeOfDay"
            type="radio"
            value="lark"
            onChange={props.handleChange}
            />
        <div className="radio-option"></div>
        </div>

      </div>
    );
  }

  export default Step2;
