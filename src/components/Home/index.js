import {Link} from 'react-router-dom'
import './index.css'

const GameHomeScreens = () => (
  <div className="bg-HomeScreen">
    <h1 className="home-heading">Games</h1>
    <div className="main-container">
      <div className="sub-container">
        <Link to="/emoji-game-rules" className="card-container">
          <img
            alt="emoji"
            className="image-container"
            src="https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628149323/GameHomeScreenImages/Asset_1_4x_1_hcjv5i.png"
          />
          <p className="para">Emoji Game</p>
        </Link>
        <Link to="/memory-game-rules" className="card-container">
          <p className="para">Memory Game</p>
          <img
            alt="memory"
            src="https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628149323/GameHomeScreenImages/memory_ayfkwb.png"
          />
        </Link>
      </div>
      <div className="sub-container">
        <Link to="/rock-paper-scissor-rules" className="card-container">
          <p className="para">Rock Paper Scissor</p>
          <img
            alt="rock-paper-scissor"
            src="https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628149323/GameHomeScreenImages/Group_7469_tfwcid.png"
          />
        </Link>
        <Link to="/card-flip-rules" className="card-container">
          <img
            alt="card-flip"
            src="https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628149323/GameHomeScreenImages/animals_riwcs3.png"
          />
        </Link>
      </div>
    </div>
  </div>
)
export default GameHomeScreens
