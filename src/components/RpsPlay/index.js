import {Component} from 'react'
import './index.css'

const RpsList = [
  {
    id: 0,
    rpsName: 'Rock',
    rpsUel:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628322542/RpsPlay/Group_6941rock_l56bec.png',
  },
  {
    id: 1,
    rpsName: 'Paper',
    rpsUel:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628322542/RpsPlay/Group_7427paper_fuc5bv.png',
  },
  {
    id: 2,
    rpsName: 'Scissor',
    rpsUel:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628322542/RpsPlay/Group_6940scissor_ce3sst.png',
  },
]

const RpsRandomList = [
  {
    id: 0,
    rpsName: 'Rock',
    rpsUel:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628322542/RpsPlay/Group_6941rock_l56bec.png',
  },
  {
    id: 1,
    rpsName: 'Paper',
    rpsUel:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628322542/RpsPlay/Group_7427paper_fuc5bv.png',
  },
  {
    id: 2,
    rpsName: 'Scissor',
    rpsUel:
      'https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628322542/RpsPlay/Group_6940scissor_ce3sst.png',
  },
]

const RpsRandom = RpsRandomList

class RpsPlay extends Component {
  state = {
    personPick: RpsList[0].id,
    randomPick: RpsRandom,
    setResult: '',
    setScore: 0,
  }

  getRandomIds = () => {
    const randomId = RpsRandomList.sort(() => Math.random() - 0.5)
    return randomId
  }

  result = () => {
    const {personPick, randomPick} = this.state

    if (
      (personPick === 0 && randomPick === 2) ||
      (personPick === 1 && randomPick === 0) ||
      (personPick === 2 && randomPick === 1)
    ) {
      console.log('win', 1)
      return {result: 'win', score: 1}
    }
    if (
      (personPick === 0 && randomPick === 1) ||
      (personPick === 2 && randomPick === 0) ||
      (personPick === 1 && randomPick === 2)
    ) {
      return {result: 'lose', score: -1}
    }
    return {result: 'draw', score: 0}
  }

  setScoreAndResult = () => {
    const {setResult, setScore} = this.state
    const result1 = this.result()
    const {result, score} = result1
    this.setState({setResult: result})
    this.setState(prevState => ({setScore: prevState.setScore + score}))
    console.log(setResult, setScore)
  }

  onClickRock = () => {
    this.setState({personPick: RpsList[0].id})
    const uprandomPick = this.getRandomIds()
    this.setState({randomPick: uprandomPick[0].id})
  }

  onClickPaper = () => {
    this.setState({personPick: RpsList[1].id})
    const uprandomPick = this.getRandomIds()
    this.setState({randomPick: uprandomPick[0].id})
  }

  onClickScissor = () => {
    this.setState({personPick: RpsList[2].id})
    const uprandomPick = this.getRandomIds()
    this.setState({randomPick: uprandomPick[0].id})
  }

  render() {
    const {personPick, randomPick} = this.state
    console.log(personPick, randomPick)
    return (
      <div className="rps">
        <h1 className="rps-heading">Rock Paper Scissor</h1>
        <p className="rps-para">Let`s Play</p>
        <div className="rps-main">
          <img
            src="https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628322542/RpsPlay/Group_6941rock_l56bec.png"
            className="rps-rock"
            alt="rock"
            onClick={this.onClickRock}
          />
          <div className="paper">
            <img
              src="https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628322542/RpsPlay/Group_7427paper_fuc5bv.png"
              className="rps-paper"
              alt="paper"
              onClick={this.onClickPaper}
            />
          </div>
          <div className="scissor">
            <img
              src="https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628322542/RpsPlay/Group_6940scissor_ce3sst.png"
              className="rps-scissor"
              alt="scissor"
              onClick={this.onClickScissor}
            />
          </div>
        </div>
        <button
          type="button"
          className="rps-btn"
          onClick={this.setScoreAndResult}
        >
          Rules
        </button>
      </div>
    )
  }
}
export default RpsPlay
