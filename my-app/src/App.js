import logo from './logo.svg';
import './App.css';
import answers from "./answers.json"
import { useEffect, useState } from "react"
function App() {

  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  const monthlyReport = months.map(item => {
    return { monthNumber: item, monthlyAnswers: [] }
  })

  const getEmployeesIdArray = answers.map(item => { return item.employeeId })
  const removeRepeatNumbers = array => [... new Set(array)]
  const filterdEmployeeId = removeRepeatNumbers(getEmployeesIdArray)

  const joinAnswersOnMonths = () => {
    const MonthsAnswers = monthlyReport.forEach(item => {
      const filter = answers.filter(employee => {
        const date = new Date(employee.answeredOn), y = date.getFullYear(), m = date.getMonth(), day = date.getDate();
        return (m + 1) === item.monthNumber
      })
      return item.monthlyAnswers = filter
    })
    return MonthsAnswers
  }
  joinAnswersOnMonths()


  const singleMonth = () => {

    monthlyReport.forEach(element => {
      const singleMonthArray = element.monthlyAnswers
      const getAnswersForEachEmployee = filterdEmployeeId.map(employee => {
        const filteredAnswers = singleMonthArray.filter(item => {
          return item.employeeId === employee
        })
        // console.log(filteredAnswers);
        // console.log(element);
        return { employeeId: employee, employeeAnswers: filteredAnswers }
      })
      return element.monthlyAnswers = getAnswersForEachEmployee
    })
  }
  singleMonth()
  console.log(monthlyReport);


  const addSumAnswers = () => {
    answers.forEach(element => {
      const sumAnswers = (element.answer1 + element.answer2 + element.answer3 + element.answer4 + element.answer5) / 25
      element.asnwersResult = sumAnswers
    })
  }
  addSumAnswers()



  const getEndOfTheMonth = answers.map(element => {
    const date = new Date(element.answeredOn), y = date.getFullYear(), m = date.getMonth(), day = date.getDate();
    const answerDay = new Date(y, m, day);
    const lastDay = new Date(y, m + 1, 0);

  })



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
