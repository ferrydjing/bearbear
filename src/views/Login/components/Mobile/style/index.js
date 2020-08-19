import styled from 'styled-components'
const rem = (px) => {
  return px / 100 + 'rem'
}

export const Wrap = styled.section`
  width: 100vw;
  height: 100vh;
  background: #fff;
  .c-mobile-login__to-register {
    margin: ${rem(87)} 0 ${rem(115)};
    font-size: ${rem(30)};
    font-weight: normal;
    color: #298eff;
    text-align: right;
    line-height: 1;
    cursor: pointer;
    text-align: right;
  }
  h1 {
    margin: 0 0 ${rem(106)};
    font-size: ${rem(50)};
    color: #333;
    font-weight: normal;
    line-height: 1;
  }
  .mobile-item {
    .ant-form-item-control-input-content {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        height: ${rem(1)};
        background: #ebebed;
      }
    }
  }
  .save-btn {
    margin-top: ${rem(155)};
  }
  .save-btn-register {
    margin-top: ${rem(100)};
  }
  .forgot-btn {
    margin-top: ${rem(55)};
    font-size: ${rem(30)};
    line-height: 1;
    color: #999999;
  }
`
