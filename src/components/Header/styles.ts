import styled from 'styled-components'

export const TopBar = styled.header`
  background: white;
  height: 70px;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;

  @media only screen and (min-width: 1024px) {
    position: relative;
    padding: 0 5vw;
  }
`

export const Logo = styled.div`
  align-items: center;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Icon = styled.img`
  height: 50px;
  margin: 0 10px;

  @media only screen and (min-width: 1024px) {
    margin-left: 0;
  }
`

export const Naming = styled.div`
  display: flex;
  flex-direction: column;
`

export const Word = styled.h1`
  @font-face {
    font-family: 'Druid';
    src: url('druid.ttf');
  }
  font-size: 2.5rem;
  font-weight: 100;
  font-family: Druid, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
