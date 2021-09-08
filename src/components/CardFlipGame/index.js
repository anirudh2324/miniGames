import {Component} from 'react'
import CardFlipCards from '../CardFlipCards'

import './index.css'

const content = [
  {
    id: 0,
    name: 'bull',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7477bull_v5vgzz.png',
  },
  {
    id: 1,
    name: 'bird',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7481bird_jtko8k.png',
  },
  {
    id: 2,
    name: 'rat',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7478rat_we6vbt.png',
  },
  {
    id: 3,
    name: 'tiger',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/%C3%91%C3%AB%C3%AE%C3%A9_1tiger_yz87vh.png',
  },
  {
    id: 4,
    name: 'sheep',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7482sheep_uetqxr.png',
  },
  {
    id: 5,
    name: 'zebra',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/%C3%91%C3%AB%C3%AE%C3%A9_1zebra_eqxjb3.png',
  },
  {
    id: 6,
    name: 'lizerd',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403796/cardFlip/%C3%91%C3%AB%C3%AE%C3%A9_1lizerd_dlofc3.png',
  },
  {
    id: 7,
    name: 'wildbear',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7475wildbear_sdqu8j.png',
  },
  {
    id: 8,
    name: 'bear',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403796/cardFlip/Group_7476bear_y1s8db.png',
  },
  {
    id: 9,
    name: 'greenbird',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7485greenbird_eru67t.png',
  },
  {
    id: 10,
    name: 'bull',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7477bull_v5vgzz.png',
  },
  {
    id: 11,
    name: 'bird',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7481bird_jtko8k.png',
  },
  {
    id: 12,
    name: 'rat',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7478rat_we6vbt.png',
  },
  {
    id: 13,
    name: 'tiger',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/%C3%91%C3%AB%C3%AE%C3%A9_1tiger_yz87vh.png',
  },
  {
    id: 14,
    name: 'sheep',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7482sheep_uetqxr.png',
  },
  {
    id: 15,
    name: 'zebra',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/%C3%91%C3%AB%C3%AE%C3%A9_1zebra_eqxjb3.png',
  },
  {
    id: 16,
    name: 'lizerd',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403796/cardFlip/%C3%91%C3%AB%C3%AE%C3%A9_1lizerd_dlofc3.png',
  },
  {
    id: 17,
    name: 'wildbear',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7475wildbear_sdqu8j.png',
  },
  {
    id: 18,
    name: 'bear',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403796/cardFlip/Group_7476bear_y1s8db.png',
  },
  {
    id: 19,
    name: 'greenbird',
    faceUp: false,
    url:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628403797/cardFlip/Group_7485greenbird_eru67t.png',
  },
]

const doubleContent = content.sort(() => Math.random() - 0.5)
class CardFlipGame extends Component {
  state = {
    cards: doubleContent,
    firstCard: '',
    secondCard: '',
    firstId: null,
    secondId: null,
    score: 0,
    cardsFlipCount: 0,
  }

  onClickFlip = id => {
    this.setState(prevState => ({
      cards: prevState.cards.map(eachCardItem => {
        if (id === eachCardItem.id) {
          const updateFaceUp = !eachCardItem.faceUp
          return {...eachCardItem, faceUp: updateFaceUp}
        }
        return eachCardItem
      }),
    }))
  }

  onAddFirstCard = (name, id) => {
    const {firstCard, secondCard, firstId, secondId} = this.state
    if (firstCard === '') {
      this.setState({firstCard: name, firstId: id})
      this.setState(prev => ({cardsFlipCount: prev.CardFlipCards + 1}))
    } else if (secondCard === '') {
      if (name === firstCard) {
        this.setState(prev => ({score: prev.score + 1}))
      }
      this.setState({secondCard: name, secondId: id})
      this.setState(prev => ({cardsFlipCount: prev.CardFlipCards + 1}))
    }
    if (firstCard !== '' && secondCard !== '') {
      if (firstCard === secondCard) {
        this.setState(prevState => ({
          cards: prevState.cards.map(eachCardItem => {
            if (id === eachCardItem.id) {
              const updateFaceUp = true
              return {...eachCardItem, faceUp: updateFaceUp}
            }
            return eachCardItem
          }),
        }))
        this.setState({
          firstCard: name,
          secondCard: '',
          firstId: id,
          secondId: null,
        })
        this.setState(prev => ({cardsFlipCount: prev.CardFlipCards + 1}))
      } else {
        this.onClickFlip(firstId)
        this.onClickFlip(secondId)
        this.setState({
          firstCard: name,
          secondCard: '',
          firstId: id,
          secondId: null,
        })
        this.setState(prev => ({cardsFlipCount: prev.CardFlipCards + 1}))
      }
    }
  }

  renderCardFlipList = () => {
    const {cards} = this.state

    return (
      <ul className="card-flip-list-container">
        {cards.map(emoji => (
          <CardFlipCards
            emoji={emoji}
            key={emoji.id}
            onClickFlip={this.onClickFlip}
            onAddFirstCard={this.onAddFirstCard}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, cardsFlipCount} = this.state
    return (
      <div className="card-flip-game-container">
        <h1 className="card-flip-game-heading">Card-Flip Memory Game</h1>
        <div className="card-flip-game-body">
          <div className="card-flip-score-content">
            <p className="card-flip-para">cards Flip Count {cardsFlipCount}</p>
            <p className="card-flip-para">timer</p>
            <p className="card-flip-para">Score {score}</p>
          </div>
          {this.renderCardFlipList()}
          {/* /* {isGameOver ? this.renderScoreCard() : */}
        </div>
        <div className="emoji-rule-btn-container">
          <button type="button" className="emoji-rule-btn">
            Rules
          </button>
        </div>
      </div>
    )
  }
}

export default CardFlipGame

