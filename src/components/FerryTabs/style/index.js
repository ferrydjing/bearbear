import styled from 'styled-components'

export const Wrap = styled.div`
  position: relative;
  padding: 0 24px;
  height: 36px;
  background: #fff;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background: #efefef;
  }
  .scroll {
    display: flex;
    height: 100%;
    align-items: center;
    overflow-x: auto;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      padding: 0 5px;
      height: 22px;
      font-size: 12px;
      border: 1px solid;
      border-radius: 4px;
      color: rgb(250, 173, 20);
      background: rgb(255, 251, 230);
      border-color: rgb(255, 229, 143);
      cursor: pointer;
      &:not(:first-child) {
        margin-left: 10px;
      }
      &.active {
        color: rgb(47, 84, 235);
        background: rgb(240, 245, 255);
        border-color: rgb(173, 198, 255);
      }
      .anticon {
        margin-left: 5px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.45);
        transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86) 0s;
        &:hover {
          color: rgba(0, 0, 0, 0.8);
        }
      }
    }
  }
`
