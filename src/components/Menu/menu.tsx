import React, { useContext } from 'react'
import * as S from './styles'
import { MenuContext } from 'contexts'

const Menu = ({ pages = ['Home', 'About', 'Chronicles', 'Contact'] }) => {
  const { menuStatus } = useContext(MenuContext)

  return (
    <S.SideBar className={menuStatus && 'active'}>
      <S.List>
        {pages.map((page) => (
          <S.Item key={page}>
            <S.A>
              <S.H1>{page}</S.H1>
            </S.A>
          </S.Item>
        ))}
      </S.List>
    </S.SideBar>
  )
}

export default Menu
