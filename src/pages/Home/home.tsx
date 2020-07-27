import styled from 'styled-components'

const Home = () => (
  <>
    <Description>Chronicles from the land of the Angles</Description>
    <Text>
      Learnings and records of a strange discovering the wonders of the United
      Kingdom.
    </Text>
    <Illustration
      src="/img/standing-stone-circle-250px.png"
      alt="Ancient standing stone circle."
    />
    <Text>Coming soon!</Text>
  </>
)

const Description = styled.h6`
  font-size: 3.5rem;
  margin-top: 130px;
  padding: 0 50px;

  @media only screen and (min-width: 1024px) {
    font-size: 6.9rem;
    margin: 0;
    padding-top: 50px;
    text-shadow: 2px 2px 5px #000;
  }
`
const Illustration = styled.img`
  margin-top: 30px;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`
const Text = styled.h2`
  color: #212738;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 130px;
  padding: 0 50px;

  &:last-child {
    text-align: center;
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 20px;
    text-shadow: 2px 2px 5px #000;
    color: #fff;

    &:last-child {
      font-size: 4rem;
      margin-top: 10%;
      transform: translateY(-100%);
    }
  }
`

export default Home
