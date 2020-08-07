import styled from 'styled-components'

export const Wrap = styled.section`
  padding: 24px;
  background: #fff;
  h1 {
    position: relative;
    margin-bottom: 16px;
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
  }
`
