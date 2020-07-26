import styled from 'styled-components'

export const SideBar = styled.div`
  margin-top: 70px;
  background: black;
  display: flex;
  height: calc(100vh - 70px);
  position: absolute;
  width: 100%;
  transform: translateX(-100vw);
  transition: 0.2s transform;

  &.active {
    transform: translateX(0);
  }
`

export const List = styled.ul`
  background: #ccc;
  height: 100%;
  padding: 0 25px;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
`

export const Item = styled.li`
  align-items: center;
  border: 1px solid #056839;
  display: flex;
  height: 70px;
  justify-content: center;
  width: 100%;
}
`

export const A = styled.a`
  align-items: center;
  color: blue;
  position: relative;
`

export const H1 = styled.h1`
  color: #056839;
  text-align: center;
`
