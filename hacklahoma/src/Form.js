import React from 'react';
import Step1 from './setup/Step1.js'
import Step2 from './setup/Step2.js'
import Step3 from './setup/Step3.js'
import Step4 from './setup/Step4.js'
import Step5 from './setup/Step5.js'
import Step6 from './setup/Step6.js'
import './setup/form-styles.css';

const numQuestions = 6;

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      userName:  '',
      timeOfDay: '',
      sleepTime: null,
      wakeTime: null,
      breakfastStartTime: null,
      breakfastEndTime: null,
      lunchStartTime: null,
      lunchEndTime: null,
      dinnerStartTime: null,
      dinnerEndTime: null,
      busyTimes: [{startTime: null, endTime: null, name: ""}],
      tasks: [{name: "", category: "", timeInMinutes: 0, flagged: false}]
    }
  }

  handleDelete = i => e => {
    e.preventDefault()
    let busyTimes = [
      ...this.state.busyTimes.slice(0, i),
      ...this.state.busyTimes.slice(i + 1)
    ]
    this.setState({
      busyTimes
    })
  }

  // To handle the input from multi-field form pages (step 5 specifically)
  handleStartTime = i => e => {
    let busyTimes = [...this.state.busyTimes]
    busyTimes[i].startTime = e.target.value
    this.setState({
      busyTimes
    })
  }

  handleEndTime = i => e => {
    let busyTimes = [...this.state.busyTimes]
    busyTimes[i].endTime = e.target.value
    this.setState({
      busyTimes
    })
  }

  handleBusyName = i => e => {
    let busyTimes = [...this.state.busyTimes]
    busyTimes[i].name = e.target.value
    this.setState({
      busyTimes
    })
  }

  // Handle input from step 6 (this code is kinda bad because we need one method to handle each input field)
  // We should be able to make a more general approach based on the name of each key

  handleTimeInMinutes = i => e => {
    let tasks = [...this.state.tasks]
    tasks[i].timeInMinutes = e.target.value
    this.setState({
      tasks
    })
  }

  handleTaskName = i => e => {
    let tasks = [...this.state.tasks]
    tasks[i].name = e.target.value
    this.setState({
      tasks
    })
  }

  handleTaskCategory = i => e => {
    let tasks = [...this.state.tasks]
    tasks[i].category = e.target.value
    this.setState({
      tasks
    })
  }

  handleFlag = i => e => {
    let tasks = [...this.state.tasks]
    tasks[i].flagged = e.target.checked
    this.setState({
      tasks
    })
  }

  addTask = e => {
    e.preventDefault()
    let tasks = this.state.tasks.concat([{name: "", category: "", timeInMinutes: 0, flagged: false}])
    this.setState({
      tasks
    })
  }

  handleDeleteTasks = i => e => {
    e.preventDefault()
    let tasks = [
      ...this.state.tasks.slice(0, i),
      ...this.state.tasks.slice(i + 1)
    ]
    this.setState({
      tasks
    })
  }



  addQuestion = e => {
    e.preventDefault()
    let busyTimes = this.state.busyTimes.concat([{startTime: null, endTime: null}])
    this.setState({
      busyTimes
    })
  }

  // To handle the input from single-field form pages.
  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    let busyTimes = this.state.busyTimes;
    let tasks = this.state.tasks;
    
    // Process arrays
    for(var i = 0; i < busyTimes.length; i++) {
      if(!busyTimes[i].startTime === null) continue;

      busyTimes[i].start = this.convertToMinutesSinceMidnight(busyTimes[i].startTime);
      busyTimes[i].end = this.convertToMinutesSinceMidnight(busyTimes[i].endTime);

      // This code could cause future errors with certain engines
      delete busyTimes[i].startTime;
      delete busyTimes[i].endTime;
    }

    for(var i = 0; i < tasks.length; i++) {
      if(!tasks[i].startTime) continue;
      tasks[i].start = this.convertToMinutesSinceMidnight(tasks[i].startTime);
      tasks[i].end = this.convertToMinutesSinceMidnight(tasks[i].endTime);

      // This code could cause future errors with certain engines
      delete tasks[i].startTime;
      delete tasks[i].endTime;
    }
    
    var jsonString = JSON.stringify({
      timePreference: this.timeOfDay,
      Sleep: {
        start: this.convertToMinutesSinceMidnight(this.state.sleepTime), // TODO: convert to minutes
        end: this.convertToMinutesSinceMidnight(this.state.wakeTime)
      },
      Breakfast: {
        start: this.convertToMinutesSinceMidnight(this.state.breakfastStartTime),
        end: this.convertToMinutesSinceMidnight(this.state.breakfastEndTime)
      },
      Lunch: {
        start: this.convertToMinutesSinceMidnight(this.state.lunchStartTime),
        end: this.convertToMinutesSinceMidnight(this.state.lunchEndTime)
      },
      Dinner: {
        start: this.convertToMinutesSinceMidnight(this.state.dinnerStartTime),
        end: this.convertToMinutesSinceMidnight(this.state.dinnerEndTime)
      },
      blockedOff: this.state.busyTimes, // TODO: change startTIme to start and endTime to end, also do this in this.tasks
      Tasks: this.state.tasks
    }); 
  //  fetch('https://mywebsite.com/endpoint/', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: jsonString
  //   })

    alert(jsonString)

    // const { userName, timeOfDay, sleepTime, wakeTime, breakfastStartTime, tasks } = this.state
    // alert(`Your registration detail: \n
    //        Name: ${userName} \n
    //        Time of Day: ${timeOfDay} \n
    //        sleepTime: ${sleepTime} \n
    //        wakeTime: ${wakeTime} \n
    //        startTime: ${breakfastStartTime} \n
    //        endTime: ${tasks[0].flagged}`)
  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= numQuestions - 1? numQuestions: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  convertToMinutesSinceMidnight(time) {
    return time? (parseInt(time.substring(0, time.indexOf(":"))) * 60 + parseInt(time.substring(time.indexOf(":") + 1))) : 0;
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button
        className="btn btn-special"
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep < numQuestions){
    return (
      <button
        className="btn btn-primary"
        type="button" onClick={this._next}>
      Next
      </button>
    )
  } else {
    return (
      <button
        className="btn btn-success float-right"
        type="button"
        onClick={this.handleSubmit}>
          Generate Schedule
      </button>
    )
  }
  return null;
}

  render() {
    return (
      <React.Fragment>
      <div className="wrapper">
        <p>Answer a few short questions so we can personalize your schedule.</p>
    <p className="float-right">Question {this.state.currentStep}/{numQuestions}</p>

        <form onSubmit={this.handleSubmit}>
        {/*
          render the form steps and pass required props in
        */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
            userName={this.state.userName}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            userName={this.state.userName}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
            breakfastTimes={this.state.breakfastTimes}
          />
          <Step4
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          />
          <Step5
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            busyTimes={this.state.busyTimes}
            handleStartTime={this.handleStartTime}
            handleEndTime={this.handleEndTime}
            handleDelete={this.handleDelete}
            addQuestion={this.addQuestion}
            handleBusyName={this.handleBusyName}
          />
          <Step6
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            tasks={this.state.tasks}
            handleDeleteTasks={this.handleDeleteTasks}
            handleTimeInMinutes={this.handleTimeInMinutes}
            handleTaskName={this.handleTaskName}
            handleTaskCategory={this.handleTaskCategory}
            handleFlag={this.handleFlag}
            addTask={this.addTask}
          />
          {this.previousButton()}
          {this.nextButton()}

        </form>
      </div>
      </React.Fragment>
    );
  }
}

export default Form;
