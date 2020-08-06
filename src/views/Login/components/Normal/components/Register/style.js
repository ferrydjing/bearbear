import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  position: relative;
  margin: 70px auto 0;
  width: 340px;
  flex-direction: column;
  .save-btn {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .ant-input {
    font-size: 14px;
  }
`

export const AgreementWrap = styled.div`
  h3 {
    text-align: center;
    font-size: 16px;
    margin: 10px;
  }
  li {
    p {
      text-align: left;
      text-indent: 2em;
    }
  }
  p {
    color: #7b7f83;
    line-height: 30px;
    text-align: left;
  }
  .info-item-scroll {
    max-height: 400px;
    overflow: auto;
    margin-bottom: 20px;
  }
`
