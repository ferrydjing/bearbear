import styled from 'styled-components'

export const ButtonPageWrap = styled.section``

export const ButtonPageContanier = styled.div`
  display: flex;
  margin-top: 24px;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`
export const ContainerItem = styled.div`
  flex: 1;
  &:last-child {
    margin-left: 24px;
  }
  @media only screen and (max-width: 768px) {
    &:last-child {
      margin-top: 24px;
      margin-left: 0px;
    }
  }
`

export const Item = styled.div`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  &.mt {
    button {
      &:not(:first-child) {
        margin-top: 24px;
        margin-left: 0;
      }
    }
  }
  button {
    margin-bottom: 12px;
    &:not(:first-child) {
      margin-left: 24px;
    }
  }
`
