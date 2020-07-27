import styled from 'styled-components'

export const Wrapper = styled.footer`
  background: #fff;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  justify-content: center;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    height: 200px;
    padding: 4rem 5vw 0;
  }
`

export const Instagram = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    position: absolute;
    right: 5vw;
  }
`

export const A = styled.a`
  align-items: center;
  color: #056839;
  display: flex;
  margin-top: 5px;
  text-decoration: none;

  @media only screen and (min-width: 1024px) {
    transition: 0.2s transform;

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const P = styled.p`
  align-items: center;
  font-size: 2.5rem;
`

export const Copy = styled.div`
  padding-bottom: 30px;
  text-align: center;
  @media only screen and (min-width: 1024px) {
    bottom: 25px;
    padding-bottom: 0px;
    position: absolute;
  }
`

export const PCopy = styled.div`
  color: #212738;
  font-size: 1.5rem;
  margin-top: 3rem;
`
