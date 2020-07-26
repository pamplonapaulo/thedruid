import React, { useContext, useState } from 'react'
import * as S from './styles'
import { MenuContext } from 'contexts'

const Hamburguer = () => {
  const { toggleMenu } = useContext(MenuContext)
  const [menuState, setMenuState] = useState(false)

  const handleMenu = () => {
    toggleMenu()
    setMenuState(!menuState)
  }

  return (
    <S.Wrapper>
      <S.Btn onClick={() => handleMenu()}>
        <S.Span className={menuState && 'active'}></S.Span>
      </S.Btn>
    </S.Wrapper>
  )
}

export default Hamburguer
