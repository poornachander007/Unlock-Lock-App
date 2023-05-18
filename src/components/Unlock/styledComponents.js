// Style your elements here
import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    ${'' /* font-family: Open-Sans, Helvetica, Sans-Serif; */}
    font-family: "Roboto";
  }
`
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Image = styled.img`
  width: 200px;
`

export const Para = styled.p`
  align-items: center;
  font-family: ${props => (props.Roboto ? 'Roboto' : 'normal')};
`
export const Button = styled.button`
  border: none;
  border-radius: 8px;
`
