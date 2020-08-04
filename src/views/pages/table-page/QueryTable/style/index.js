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

export const Content = styled.div`
  margin-top: 24px;
  padding: 12px 0%;
  background: #fff;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
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
  .selection {
    position: relative;
    margin: 16px 0;
    padding: 8px 15px 8px 12px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 1.5715;
    background-color: #e6f7ff;
    border: 1px solid #91d5ff;
    border-radius: 2px;
    box-sizing: border-box;
    .anticon {
      margin-right: 10px;
      color: #1890ff;
    }
    .select-item {
      margin: 0 5px;
      color: #1890ff;
    }
    button {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .ant-table-wrapper {
  }
  .ant-pagination-item {
    a {
      line-height: 32px;
    }
  }
`
