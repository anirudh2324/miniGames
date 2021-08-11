import {Component} from 'react'

import './index.css'

class EmojiNavBar extends Component {
  renderScores = () => {
    const {currentScore, isGameOver, topScore} = this.props

    if (isGameOver) {
      return null
    }
    return (
      <div className="scores-container">
        <p className="score">Score: {currentScore}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <nav className="nav-bar-container">
        <div className="title-with-score-container">
          <div className="logo-and-title-container">
            <img
              className="emoji-logo"
              src="https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628245894/EmojiImg/wink_1_laa1l2.png"
              alt="Emoji Logo"
            />
            <h1 className="title">Emoji Game</h1>
          </div>
          {this.renderScores()}
        </div>
      </nav>
    )
  }
}

export default EmojiNavBar
