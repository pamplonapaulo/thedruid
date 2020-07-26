import React, { createContext, useState, ReactNode } from 'react'

const MenuContext = createContext()

type Props = {
  children: ReactNode
}

function MenuProvider({ children }: Props) {
  const [menuStatus, setMenuStatus] = useState(false)

  function toggleMenu() {
    console.log('menuStatus', menuStatus)

    setMenuStatus(!menuStatus)
  }

  return (
    <MenuContext.Provider
      value={{
        menuStatus,
        toggleMenu
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export { MenuProvider, MenuContext }
