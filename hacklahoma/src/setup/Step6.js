import React from 'react';

function Step6(props) {
    if (props.currentStep !== 6) {
      return null
    }
    return(
      <React.Fragment>
      <div className="form-group">
        <label htmlFor="password">What tasks would you like to accomplish?</label>
        {props.tasks.map((entry, index) => 
        <span key={index}>
            <p className="inline">I want to </p>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange= {props.handleTaskName(index)}
              value={entry.name}></input>
            <p className="inline"> and it will take </p>
            <input
              type="number"
              min="1"
              max="1440"
              className="form-control"
              name="timeInMinutes"
              onChange={props.handleTimeInMinutes(index)}
              value={entry.startTime}
            />
            <p className="inline"> minutes. </p>
            <select name="category"
                    className="form-control"
            onChange={props.handleTaskCategory(index)}
            >
              <option value="" selected disabled hidden>Choose a category</option>
              <option name="Hard Work" value="Hard Work">Hard Work</option>
              <option value="Athletics">Athletics</option>
              <option value="Creativity">Creativity</option>
              <option value="Rest">Rest</option>
              <option value="Social Media">Social Media</option>
              <option value="Hobbies">Hobbies</option>
            </select>

            <input type="checkbox" onChange={props.handleFlag(index)} name="flagged"/>
            <label className="inline" htmlFor="flagged"> Important</label>

            <button onClick={props.handleDeleteTasks(index)}>X</button>

          </span>)}

          <br></br>
        <button onClick={props.addTask} className="btn">Add another time</button>
      </div>
      </React.Fragment>
    );
  }

  export default Step6;
