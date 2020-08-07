import styled from 'styled-components'

export const Wrap = styled.section`
  padding: 24px;
  background: #fff;
`

export const Header = styled.div`
  position: relative;
  padding-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #dfdfdf;
  }
`

export const Content = styled.div`
  padding: 24px 0;
  min-height: 400px;
  p {
    line-height: 1.5;
  }
`
