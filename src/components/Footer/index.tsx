import * as S from './styles'
import Instagram from '../Instagram'

const Footer = ({ address = 'thedruid.uk' }) => (
  <S.Wrapper>
    <S.Instagram>
      <S.A
        target="_blank"
        rel="noreferrer"
        href={`https://www.instagram.com/${address}/`}
      >
        <Instagram />
        <S.P>{`@${address}`}</S.P>
      </S.A>
    </S.Instagram>

    <S.Copy>
      <S.PCopy>{'© All rights reserved'}</S.PCopy>
    </S.Copy>
  </S.Wrapper>
)

export default Footer
