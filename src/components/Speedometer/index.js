import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increaseSpeed = () => {
    this.setState(prevState =>
      prevState.speed === 200
        ? {speed: prevState.speed}
        : {speed: prevState.speed + 10},
    )
  }

  decreaseSpeed = () => {
    this.setState(prevState =>
      prevState.speed === 0
        ? {speed: prevState.speed}
        : {speed: prevState.speed - 10},
    )
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-container">
        <h1 className="main-heading-style">SPEEDOMETER</h1>
        <img
          className="speedometer-img"
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1 className="speed-heading">Speed is {speed}mph</h1>
        <p className="minmax-paragraph">
          Min limit is 0mph, Max Limit is 200mph
        </p>
        <div>
          <button
            className="increase-button"
            type="button"
            onClick={this.increaseSpeed}
          >
            Accelerate
          </button>
          <button
            className="decrease-button"
            type="button"
            onClick={this.decreaseSpeed}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
