import {Switch} from 'react-router-dom'

import Home from './components/Home'
import EmojiRules from './components/EmojiRules'
import EmojiGame from './components/EmojiGame'
import MemoryGameRules from './components/MemoryGameRules'
import CardFlipRules from './components/CardFlipRules'
import RockPaperScissorRules from './components/RockPaperScissorRules'
import ProtectedRoute from './components/ProtectedRoute'
import RpsPlay from './components/RpsPlay'
import CardFlipGame from './components/CardFlipGame'
import MemoryGame from './components/MemoryGame'
import './App.css'

const App = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/emoji-game-rules" component={EmojiRules} />
    <ProtectedRoute exact path="/emoji-game" component={EmojiGame} />
    <ProtectedRoute exact path="/rps-play" component={RpsPlay} />
    <ProtectedRoute exact path="/card-flip-game" component={CardFlipGame} />
    <ProtectedRoute
      exact
      path="/memory-game-rules"
      component={MemoryGameRules}
    />
    <ProtectedRoute exact path="/memory-game" component={MemoryGame} />
    <ProtectedRoute
      exact
      path="/rock-paper-scissor-rules"
      component={RockPaperScissorRules}
    />
    <ProtectedRoute exact path="/card-flip-rules" component={CardFlipRules} />
  </Switch>
)
export default App
