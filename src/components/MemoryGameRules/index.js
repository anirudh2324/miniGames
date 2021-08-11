import {Link} from 'react-router-dom'
import './index.css'

const EmojiRules = () => (
  <div className="memory-main-container">
    <h1 className="memory-heading">Memory Matrix</h1>
    <img
      src="https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628149323/GameHomeScreenImages/memory_ayfkwb.png"
      alt="memory"
    />
    <div className="memory-heading-container">
      <h1 className="memory-heading">Rules</h1>
      <div className="memory-rules">
        <div>
          <ul className="memory-list-elements">
            <li>
              In each level of the Game, Users should be able to see the Grid
              with (N X N) size starting from 3 and the grid will highlight N
              cells in Blue, the N highlighted cells will be picked randomly.
            </li>
            <li>
              The highlighted cells will remain N seconds for the user to
              memorize the cells. At this point, the user should not be able to
              perform any action.
            </li>
            <li>
              After N seconds, the grid will clear the N highlighted cells.
            </li>
          </ul>
        </div>
        <div>
          <ul className="memory-list-elements">
            <li>
              At N seconds, the user can click on any cell. Clicking on a cell
              that was highlighted before it will turn blue. Clicking on the
              other cells that were not highlighted before then will turn to
              red.
            </li>
            <li>
              The user should be promoted to the next level if they guess all N
              cells correctly in one attempt., they should be flipped face down
              again after a short 2 seconds.
            </li>
            <li>
              The user should be taken to the results page if the user clicks on
              the wrong cell.
            </li>
            <li>
              If the user completed all the levels, then the user should be
              taken to the results page.
            </li>
          </ul>
        </div>
      </div>
      <Link to="/memory-game">
        <button type="button" className="memory-btn">
          Start Playing
        </button>
      </Link>
    </div>
  </div>
)

export default EmojiRules
