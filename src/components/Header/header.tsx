import * as S from './styles'
import Hamburguer from 'components/Hamburguer'
import Menu from 'components/Menu'

const Header = ({
  brandIcon = '/img/oak-tree-logo-500px.png',
  brandIconAlt = 'Oak tree icon, logo of The Druid blog. All trees are sacred for the druid, and particularly the oak tree.',
  brandNameTop = 'The',
  brandNameBottom = 'Druid'
}) => (
  <S.TopBar>
    <S.Logo>
      <S.Icon src={brandIcon} alt={brandIconAlt} />
      <S.Naming>
        <S.Word>{brandNameTop}</S.Word>
        <S.Word>{brandNameBottom}</S.Word>
      </S.Naming>
    </S.Logo>
    <Hamburguer />
    <Menu />
  </S.TopBar>
)

export default Header
