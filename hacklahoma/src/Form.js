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
      busyTimes: [{startTime: null, endTime: null}],
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

  // To handle the input from multi-field form pages
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
    var jsonString = JSON.stringify({}); //TODO: add correct format of JSON

    fetch('https://mywebsite.com/endpoint/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: jsonString
    })


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
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
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
