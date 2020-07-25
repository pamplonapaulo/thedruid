import * as S from './styles'
import Footer from '../Footer'

const Main = ({
  title = 'The Druid: Chronicles of the land of the Angles',
  description = 'Thoughts, learnings, and records from a cosmopolitan shaman discovering the wonders and dramas of the United Kingdom.',
  footer = 'Coming soon!'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/oak-tree-logo-500px.png"
      alt="Oak tree icon, logo of The Druid blog. All trees are sacred for the druid, and particularly the oak tree."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/standing-stone-circle-250px.png"
      alt="Ancient standing stone circle."
    />
    <S.Description>{footer}</S.Description>
    <Footer />
  </S.Wrapper>
)

export default Main
