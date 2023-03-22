import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, textInput: ''}

  onType = event => {
    this.setState({
      count: event.target.value.length,
      textInput: event.target.value,
    })
  }

  onButton = () => {
    this.setState({count: 0, textInput: ''})
  }

  render() {
    const {count, textInput} = this.state

    return (
      <div className="bg-container">
        <div className="input-card">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-body">
            <label htmlFor="phrase" className="label-el">
              Enter the Phrase
            </label>
            <input
              placeholder="Enter the Phrase"
              type="text"
              id="phrase"
              className="input-el"
              value={textInput}
              onChange={this.onType}
            />
          </div>
          <p className="count-el" onClick={this.onButton}>
            No.of letters: {count}
          </p>
        </div>
        <div className="image-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
