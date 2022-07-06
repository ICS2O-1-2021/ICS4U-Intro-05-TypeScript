/*
 * The logging program determines how many logs a truck can carry if a log
 * weighs 20kg/m and is either 0.25m, 0.5m or 1m and the truck can carry 1100kg.
 *
 * @author  Mr Coxall
 * @version 2.0
 * @since   2020-01-01
 */

import React from "react"
import Button from "@mui/material/Button"
import Textfield from "@mui/material/TextField"

/**
 * Calculate function.
 */
function calculateValue() {
  const KG_PER_METER = 20.0
  const TRUCK_MAX_WEIGHT = 1100.0
  let typeOfLog = 0

  // input
  const textFieldElement = document.getElementById("type-of-log")
  if (textFieldElement != null) {
    typeOfLog = +(document.getElementById("type-of-log") as HTMLInputElement)
      .value
  }

  // calculate
  const numberOfLogs = TRUCK_MAX_WEIGHT / (KG_PER_METER * typeOfLog)

  const divElement = document.getElementById("answer")

  if (divElement != null) {
    divElement.innerHTML = `The truck can carry ${numberOfLogs} logs that are ${typeOfLog} meters long.`
  }
}

/**
 * App main entry point.
 */
function App() {
  return (
    <div className="App">
      <h1>Log Truck Calculator</h1>
      <br />
      <Textfield id="type-of-log" label="Type of Log" variant="outlined" />
      <br />
      <br />
      <Button onClick={calculateValue} variant="contained">
        Calculate
      </Button>
      <br />
      <div id="answer"></div>
    </div>
  )
}

export default App
