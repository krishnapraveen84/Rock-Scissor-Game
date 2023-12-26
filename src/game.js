import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'
import {
  MainContainer,
  ScoreCardContainer,
  Heading,
  ScoreCard,
  Paragraph,
  GameContainer,
  Buttons,
  Image,
  Card,
  WonContainer,
  Status,
  PlayAginBtn,
  CloseButton,
  RulesContainer,
  PopImage,
  CloseBtnContainer,
} from './styledComponents'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]
const noOfItems = choicesList.length
const intialOpp = Math.floor(Math.random() * noOfItems)
class Game extends Component {
  state = {
    score: 0,
    opponentIndex: intialOpp,
    playerImg: '',
    gameStatus: true,
    status: '',
  }

  onSelectItem = id => {
    const {opponentIndex} = this.state
    const randomItem = choicesList[opponentIndex].id
    const playerItem = choicesList.find(each => each.id === id)
    const playerImg = playerItem.imageUrl
    this.setState({playerImg})

    console.log('player', id)
    console.log('oppent', randomItem)

    if (id === randomItem) {
      this.setState({
        gameStatus: false,
        status: 'IT IS DRAW',
      })
    } else if (randomItem === 'ROCK' && id === 'SCISSORS') {
      this.setState(prev => ({
        gameStatus: false,
        score: prev.score - 1,
        status: 'YOU LOSE',
      }))
    } else if (randomItem === 'SCISSORS' && id === 'PAPER') {
      this.setState(prev => ({
        gameStatus: false,

        status: 'YOU LOSE',
        score: prev.score - 1,
      }))
    } else if (randomItem === 'PAPER' && id === 'SCISSORS') {
      this.setState(prev => ({
        gameStatus: false,

        status: 'YOU WON',
        score: prev.score + 1,
      }))
    } else if (randomItem === 'ROCK' && id === 'PAPER') {
      this.setState(prev => ({
        gameStatus: false,

        status: 'YOU WON',
        score: prev.score + 1,
      }))
    } else if (randomItem === 'SCISSORS' && id === 'ROCK') {
      this.setState(prev => ({
        gameStatus: false,

        status: 'YOU WON',
        score: prev.score + 1,
      }))
    } else if (randomItem === 'PAPER' && id === 'ROCK') {
      this.setState(prev => ({
        gameStatus: false,
        status: 'YOU LOSE',
        score: prev.score - 1,
      }))
    }
  }

  playagian = () => {
    this.setState({
      opponentIndex: Math.floor(Math.random() * noOfItems),
      gameStatus: true,
    })
  }

  renderDiffStates = () => {
    const {gameStatus, opponentIndex, playerImg, status} = this.state
    const randomItem = choicesList[opponentIndex]
    const oppImg = randomItem.imageUrl
    if (gameStatus) {
      return (
        <GameContainer>
          <Buttons
            data-testid="rockButton"
            type="button"
            onClick={() => this.onSelectItem('ROCK')}
          >
            <Image
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
              alt="ROCK"
            />
          </Buttons>
          <Buttons
            data-testid="scissorsButton"
            type="button"
            onClick={() => this.onSelectItem('SCISSORS')}
          >
            <Image
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
              alt="SCISSORS"
            />
          </Buttons>
          <Buttons
            data-testid="paperButton"
            type="button"
            onClick={() => this.onSelectItem('PAPER')}
          >
            <Image
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
              alt="PAPER"
            />
          </Buttons>
        </GameContainer>
      )
    }
    return (
      <>
        <WonContainer>
          <Card>
            <Paragraph fontSize="20px" won>
              You
            </Paragraph>
            <Image src={playerImg} alt="your choice" />
          </Card>
          <Card>
            <Paragraph fontSize="20px" won>
              Opponent
            </Paragraph>
            <Image src={oppImg} alt="opponent choice" />
          </Card>
        </WonContainer>
        <Status>
          <Paragraph fontSize="26px" won>
            {status}
          </Paragraph>
          <PlayAginBtn type="button" onClick={this.playagian}>
            PLAY AGAIN
          </PlayAginBtn>
        </Status>
      </>
    )
  }

  render() {
    const {score} = this.state

    return (
      <MainContainer>
        <ScoreCardContainer>
          <Heading>
            ROCK
            <br /> PAPER <br /> SCISSORS
          </Heading>
          <ScoreCard>
            <Paragraph fontSize="22px">Score</Paragraph>
            <Paragraph fontSize="38px" score>
              {score}
            </Paragraph>
          </ScoreCard>
        </ScoreCardContainer>
        {this.renderDiffStates()}
        <Popup
          modal
          trigger={
            <PlayAginBtn rules type="button">
              Rules
            </PlayAginBtn>
          }
        >
          {close => (
            <>
              <CloseBtnContainer>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine size={26} />
                </CloseButton>
              </CloseBtnContainer>

              <RulesContainer>
                <PopImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesContainer>
            </>
          )}
        </Popup>
      </MainContainer>
    )
  }
}

export default Game
