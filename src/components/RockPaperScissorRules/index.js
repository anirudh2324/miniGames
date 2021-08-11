import {Link} from 'react-router-dom'
import './index.css'

const EmojiRules = () => (
  <div className="rps-rules-main-container">
    <h1 className="rps-heading">ROCK PAPER SCISSOR</h1>
    <img
      src="https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628149323/GameHomeScreenImages/Group_7469_tfwcid.png"
      alt="rps"
    />
    <div className="rps-heading-container">
      <h1 className="rps-heading">Rules</h1>
      <div className="rps-rules">
        <div>
          <ul className="rps-list-elements">
            <li>
              The game result should be based on user and user opponent choices
            </li>
            <li>
              When the user choice is rock and his opponent choice is rock then
              the result will be <span className="rps-span">IT IS DRAW</span>
            </li>
            <li>
              When the user choice is paper and his opponent choice is rock then
              the result will be <span className="rps-span">You Won</span>
            </li>
            <li>
              When the user choice is a scissor and his opponent choice is rock
              then the result will be <span className="rps-span">YOU LOSE</span>
            </li>
            <li>
              When the user choice is paper and his opponent choice is paper
              then the result will be
              <span className="rps-span">IT IS DRAW</span>
            </li>
            <li>
              When the user choice is scissors and his opponent choice is paper
              then the result will be <span className="rps-span"> YOU WON</span>
            </li>
          </ul>
        </div>
        <div>
          <ul className="rps-list-elements">
            <li>
              When the user choice is rock and his opponent choice is scissors
              then the result will be <span className="rps-span">YOU WON</span>
            </li>
            <li>
              When the user choice is paper and his opponent choice is scissors
              then the result will be <span className="rps-span">YOU LOSE</span>
            </li>
            <li>
              When the user choice is scissors and his opponent choice is
              scissors then the result will be
              <span className="rps-span">IT IS DRAW</span>
            </li>
            <li>
              When the result is <span className="rps-span">YOU WON</span>, then
              the count of the score should be incremented by 1
            </li>
            <li>
              When the result is <span className="rps-span">IT IS DRAW</span>,
              then the count of the score should be the same
            </li>
            <li>
              When the result is <span className="rps-span">YOU LOSE</span>,
              then the count of the score should be decremented by 1.
            </li>
          </ul>
        </div>
      </div>
      <Link to="/rps-play">
        <button type="button" className="rps-btn">
          Start Playing
        </button>
      </Link>
    </div>
  </div>
)

export default EmojiRules
