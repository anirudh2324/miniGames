import './index.css'

const CardFlipCards = props => {
  const {emoji, flipTo} = props
  const {id, name, url, faceUp} = emoji
  const onClickCardFlipped = () => {
    flipTo(id)
  }
  const flip = faceUp ? (
    <img className="card-flip-icon" src={url} alt={name} />
  ) : (
    <img
      alt="foots"
      src="https://res.cloudinary.com/dxbi2ob2k/image/upload/v1628411563/cardFlip/XMLID_293_xuimte.png"
    />
  )

  return (
    <li className="card-flip-item" onClick={onClickCardFlipped}>
      {flip}
    </li>
  )
}

export default CardFlipCards
