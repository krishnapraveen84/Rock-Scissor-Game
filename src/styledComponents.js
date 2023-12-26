import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  padding: 20px;
  font-family: 'Roboto';
  color: #ffffff;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 30px;
  }
`
export const ScoreCardContainer = styled.div`
  width: 100%;
  border-style: solid;
  border-color: #ffffff;
  border-radius: 8px;
  border-width: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  @media screen and (min-width: 768px) {
    width: 70%;
    justify-content: space-arround;
    padding-left: 50px;
    padding-right: 50px;
    margin-bottom: 30px;
  }
`
export const Heading = styled.h1`
  font-size: 24px;
  font-family: 'Bree Serif';
`
export const ScoreCard = styled.div`
  width: 100px;
  height: 100px;
  border-style: none;
  border-radius: 6px;
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
export const Paragraph = styled.p`
  font-size: ${props => props.fontSize};
  font-weight: 540;
  font-family: 'Roboto';
  margin: ${props => (props.won ? '10px' : '0px')};
  color: ${props => (props.won ? '#ffffff' : '#223a5f')};
`
export const GameContainer = styled.div`
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const Buttons = styled.button`
  background-color: transparent;
  ouline: none;
  border-style: none;
  margin-bottom: 20px;
  color: ${props => (props.won ? '#ffffff' : '#223a5f')};
  @media screen and (min-width: 768px) {
    margin: 20px;
  }
`
export const Image = styled.img`
  width: 130px;
  height: 130px;
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 180px;
  }
`

export const WonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`
export const Status = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PlayAginBtn = styled.button`
  background-color: #ffffff;
  ouline: none;
  border-style: none;
  color: #223a5f;
  height: 40px;
  width: 60%;
  font-size: 16px;
  font-weight: 540;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: ${props => (props.rules ? '100px' : '100%')};
    align-self: ${props => (props.rules ? 'flex-end' : 'center')};
    height: 45px;
    margin: 15px;
  }
`
export const CloseBtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`
export const CloseButton = styled.button`
  background-color: #ffffff;
  ouline: none;
  border-style: none;
  color: #223a5f;
  height: 40px;
  width: 40px;
  font-size: 16px;
  font-weight: 540;
  border-radius: 8px;
  align-self: flex-end;
`
export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PopImage = styled.img`
  width: 100%;
`
