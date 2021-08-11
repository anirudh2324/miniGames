import {Link} from 'react-router-dom'
import './index.css'

const EmojiRules = () => (
  <div className="emoji-main-container">
    <div className="emoji-card-container">
      <div className="image-name-container">
        <img
          className="image-main"
          alt="emoji"
          src="https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628149323/GameHomeScreenImages/Asset_1_4x_1_hcjv5i.png"
        />
        <p className="emoji-para">Emoji Game</p>
      </div>
      <div className="rules-button-container">
        <h1 className="rules-heading">Rules</h1>
        <ul className="rules">
          <li>User should be able to see the list of Emoji</li>
          <li>
            When the user clicks any one of the Emoji for the first time, then
            the count of the score should be incremented by 1 and the List of
            emoji cards should be shuffled.
          </li>
          <li>
            This process should be repeated every time the user clicks on an
            emoji card
          </li>
          <li>
            When the user clicks on all Emoji cards without clicking any of it
            twice, then the user will win the game
          </li>
          <li>
            When the user clicks on the same Emoji for the second time, then the
            user will lose the game.
          </li>
          <li>
            Once the game is over, the user will be redirected to the results
            page.
          </li>
        </ul>
        <Link to="/emoji-game" className="button">
          <button className="btn" type="button">
            Start Playing
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default EmojiRules
