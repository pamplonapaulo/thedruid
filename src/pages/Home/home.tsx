import styled from 'styled-components'

const Home = () => (
  <>
    <Description>Chronicles of the land of the Angles</Description>
    <Text>
      Thoughts, learnings, and records from a cosmopolitan shaman discovering
      the wonders and dramas of the United Kingdom.
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
`
const Illustration = styled.img`
  margin-top: 30px;
  width: 100%;
`
const Text = styled.h2`
  color: #212738;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 130px 0;
  padding: 0 50px;

  &:last-child {
    text-align: center;
  }
`

export default Home
