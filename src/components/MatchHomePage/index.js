import {Component} from 'react'
import MathGame from '../MatchGame/'
import './index.css'

class MatchHomePage extends Component {
  state = {isButtonClicked: false}

  buttonclicked = () => {
    this.setState({isButtonClicked: true})
  }

  homePage = () => {
    return (
      <div>
        <nav className="navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
            alt="website logo"
            className="website-logo"
          />
          <ul className="nav-items-container">
            <li>
              <p className="score-text">
                Score: <span className="score-span">0</span>
              </p>
            </li>
            <li className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
                alt="timer"
                className="timer-icon"
              />
              <p className="timer-text">60 sec</p>
            </li>
          </ul>
        </nav>
        <div className="bg-image">
          <button type="button" className="button" onClick={this.buttonclicked}>
            Start Game
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {isButtonClicked} = this.state
    const {tabsList, imagesList} = this.props

    return isButtonClicked ? (
      <MathGame tabsList={tabsList} imagesList={imagesList} />
    ) : (
      this.homePage()
    )
  }
}

export default MatchHomePage
