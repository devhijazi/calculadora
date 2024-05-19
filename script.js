const elements = {
  btnNumber: document.querySelectorAll(".number"),
  btnSum: document.querySelector("#sum"),
  btnMinus: document.querySelector("#minus"),
  btnMultiple: document.querySelector("#multiple"),
  btnDivide: document.querySelector("#divide"),
  btnEquals: document.querySelector("#equals"),
  btnCE: document.querySelector("#clear-entry"),
  screen: document.querySelector("#result"),
  calcNumbers: document.querySelector("#calc-numbers"),
}

const calculator = {
  numbers: "",
  arrayOfNumber: [],
  operatorExecute: false,
  currentOperation: "",

  displayOnScreenValue(value) {
    elements.screen.textContent += value
  },

  displayOnScreenResult(result) {
    elements.screen.textContent = result
  },

  displayCalculatedNumbers(number1, operator, number2) {
    elements.calcNumbers.textContent = `${number1}${operator}${number2}`
  },

  saveNumbersToArray() {
    const operatorNotWasExecuted = this.operatorExecute === false

    if (operatorNotWasExecuted) {
      this.arrayOfNumber[0] = Number(this.numbers)
      console.log(this.arrayOfNumber)
    } else {
      this.arrayOfNumber[1] = Number(this.numbers)
      console.log(this.arrayOfNumber)
    }
  },

  getNumber(number) {
    this.numbers += number
    this.displayOnScreenValue(number)
  },

  deleteCapturedNumbers() {
    this.numbers = ""
  },

  deleteElementOfArray(index, elements) {
    this.arrayOfNumber.splice(index, elements)
  },

  clearScreen() {
    elements.calcNumbers.textContent = ""
    elements.screen.textContent = ""
  },

  clearEntry() {
    this.deleteElementOfArray(0, 2)
    this.deleteCapturedNumbers()
    this.clearScreen()
    this.operatorExecute = false
    this.currentOperation = ""
  },

  result(operation) {
    let result
    switch (operation) {
      case "+":
        result = this.arrayOfNumber.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        break
      case "-":
        result = this.arrayOfNumber.reduce((accumulator, currentValue) => accumulator - currentValue)
        break
      case "*":
        result = this.arrayOfNumber.reduce((accumulator, currentValue) => accumulator * currentValue)
        break
      case "/":
        result = this.arrayOfNumber.reduce((accumulator, currentValue) => accumulator / currentValue)
        break
    }
    this.arrayOfNumber = [result]
    this.operatorExecute = false
    return result
  },

  sum() {
    if (this.operatorExecute) {
      this.arrayOfNumber[1] = Number(this.numbers)
      const result = this.result("+")
      this.displayCalculatedNumbers(this.arrayOfNumber[0], "+", this.arrayOfNumber[1])
      this.displayOnScreenResult(result)
      this.deleteCapturedNumbers()
    } else {
      this.operatorExecute = true
      this.currentOperation = "+"
      this.arrayOfNumber[0] = Number(this.numbers)
      this.displayOnScreenValue("+")
      this.deleteCapturedNumbers()
    }
  },

  minus() {
    if (this.operatorExecute) {
      this.arrayOfNumber[1] = Number(this.numbers)
      const result = this.result("-")
      this.displayCalculatedNumbers(this.arrayOfNumber[0], "-", this.arrayOfNumber[1])
      this.displayOnScreenResult(result)
      this.deleteCapturedNumbers()
    } else {
      this.operatorExecute = true
      this.currentOperation = "-"
      this.arrayOfNumber[0] = Number(this.numbers)
      this.displayOnScreenValue("-")
      this.deleteCapturedNumbers()
    }
  },

  multiple() {
    if (this.operatorExecute) {
      this.arrayOfNumber[1] = Number(this.numbers)
      const result = this.result("*")
      this.displayCalculatedNumbers(this.arrayOfNumber[0], "*", this.arrayOfNumber[1])
      this.displayOnScreenResult(result)
      this.deleteCapturedNumbers()
    } else {
      this.operatorExecute = true
      this.currentOperation = "*"
      this.arrayOfNumber[0] = Number(this.numbers)
      this.displayOnScreenValue("*")
      this.deleteCapturedNumbers()
    }
  },

  divide() {
    if (this.operatorExecute) {
      this.arrayOfNumber[1] = Number(this.numbers)
      const result = this.result("/")
      this.displayCalculatedNumbers(this.arrayOfNumber[0], "/", this.arrayOfNumber[1])
      this.displayOnScreenResult(result)
      this.deleteCapturedNumbers()
    } else {
      this.operatorExecute = true
      this.currentOperation = "/"
      this.arrayOfNumber[0] = Number(this.numbers)
      this.displayOnScreenValue("/")
      this.deleteCapturedNumbers()
    }
  },

  equals() {
    this.arrayOfNumber[1] = Number(this.numbers)
    const result = this.result(this.currentOperation)
    this.displayOnScreenResult(result)
    this.displayCalculatedNumbers(this.arrayOfNumber[0], this.currentOperation, this.arrayOfNumber[1])
    this.deleteCapturedNumbers()
    this.operatorExecute = false
  }
}

const App = {
  init() {
    elements.btnNumber.forEach(number => {
      number.addEventListener("click", () => {
        calculator.getNumber(number.textContent)
      })
    })

    elements.btnSum.addEventListener("click", () => calculator.sum())
    elements.btnMinus.addEventListener("click", () => calculator.minus())
    elements.btnDivide.addEventListener("click", () => calculator.divide())
    elements.btnMultiple.addEventListener("click", () => calculator.multiple())
    elements.btnCE.addEventListener("click", () => calculator.clearEntry())
    elements.btnEquals.addEventListener("click", () => calculator.equals())
  },
}

App.init()
