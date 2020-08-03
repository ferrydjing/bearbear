import styled from 'styled-components'

export const Wrap = styled.section``

export const Header = styled.header`
  padding: 24px 24px 0;
  background: #fff;
  box-sizing: border-box;
  .header-form {
    display: block;
    flex-wrap: wrap;
    box-sizing: border-box;

    @media only screen and (min-width: 576px) {
      display: block;
      .item-wrap {
        &:not(:first-child) {
          margin-left: 0px;
        }
      }
    }
    @media only screen and (min-width: 768px) {
      display: flex;
      .item-wrap {
        flex: 0 0 49%;
      }
    }
    @media only screen and (min-width: 992px) {
      display: flex;
      .item-wrap {
        flex: 0 0 32%;
      }
    }
    @media only screen and (min-width: 1200px) {
      display: flex;
      .item-wrap {
        flex: 0 0 32%;
      }
    }
    .item-wrap {
      margin-right: 1%;
      .btn-wrap {
        .ant-form-item-control-input-content {
          display: flex;
          /* justify-content: flex-end; */
          button {
            margin-right: 10px;
          }
        }
      }
    }
  }
`
