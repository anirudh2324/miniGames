import {Link} from 'react-router-dom'
import './index.css'

const EmojiRules = () => (
  <div className="card-flip-main-container">
    <img
      src="https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628149323/GameHomeScreenImages/animals_riwcs3.png"
      alt="card-flip"
    />
    <div className="card-flip-heading-container">
      <h1 className="card-flip-heading">Rules</h1>
      <div className="card-flip-rules">
        <div>
          <ul className="card-flip-list-elements">
            <li>
              When the game is started, the users should be able to see the list
              of Cards that are shuffled and turned face down.
            </li>
            <li>
              When a user starts the game, the user should be able to see the
              Timer running.
            </li>
            <li>The Timer starts from 2 Minutes.</li>
            <li>
              If the two cards have the same image, they remain face up. If not,
              they should be flipped face down again after a short 2 seconds.
            </li>
          </ul>
        </div>
        <div>
          <ul className="card-flip-list-elements">
            <li>Users should be able to compare only two cards at a time.</li>
            <li>
              When the user is not able to find all the cards before the timer
              ends then the game should end and redirect to the Time Up Page.
            </li>
            <li>
              If the user finds all the matching cards before the timer ends,
              then the user should be redirected to the results page.
            </li>
          </ul>
        </div>
      </div>
      <Link to="/card-flip-game">
        <button type="button" className="card-flip-btn">
          Start Playing
        </button>
      </Link>
    </div>
  </div>
)

export default EmojiRules
