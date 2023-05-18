// Write your code here
import {useState} from 'react'

import {Container, Image, Para, Button} from './styledComponents'

const lockImage = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
// alt should be lock
const unLockImage = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
// alt should be unlock

const Unlock = () => {
  const [isLock, setToggleLock] = useState(true)
  const image = isLock ? lockImage : unLockImage
  const imageAltText = isLock ? 'lock' : 'unlock'
  const paraDescription = isLock
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'

  const buttonDescription = isLock ? 'Unlock' : 'Lock '

  const onClickToggleButton = () => {
    setToggleLock(prevState => !prevState)
  }

  return (
    <Container>
      <Image src={image} alt={imageAltText} />
      <Para Roboto>{paraDescription}</Para>
      <Button onClick={onClickToggleButton} type="button">
        {buttonDescription}
      </Button>
    </Container>
  )
}

export default Unlock
