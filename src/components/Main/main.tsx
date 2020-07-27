import styled from 'styled-components'

import Home from 'pages/Home'

const Main = () => (
  <Container>
    <Home />
  </Container>
)

const Container = styled.main`
  @media only screen and (min-width: 1024px) {
    min-height: calc(100% - 270px);
    padding: 0 calc(5vw - 50px);

    background-image: url(./img/bg-home-stonehenge.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export default Main
