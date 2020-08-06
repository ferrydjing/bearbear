import styled from 'styled-components'

export const Wrap = styled.div`
  position: relative;
  height: 32px;
  background: #fff;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background: #efefef;
  }
`
