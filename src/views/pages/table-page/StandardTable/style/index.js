import styled from 'styled-components'

export const Wrap = styled.section``

export const Content = styled.div`
  padding: 24px 24px;
  background: #fff;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      color: rgba(0, 0, 0, 0.75);
      font-weight: 500;
      font-size: 16px;
    }
    .right {
      button {
        &:not(:first-child) {
          margin-left: 10px;
        }
      }
    }
  }
  .add {
    margin-top: 16px;
  }
`

export const Add = styled.div``
