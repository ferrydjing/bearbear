import styled from 'styled-components'

export const Wrap = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 600px;
  min-height: 500px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.38);
  transform: translate(-50%, -50%);
  overflow: hidden;
`

export const Header = styled.div`
  position: relative;
  height: 100px;
  background: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #f6f6f6;
  }
  .item {
    position: relative;
    padding-bottom: 14px;
    width: 100px;
    font-size: 20px;
    font-weight: bold;
    color: #888888;
    text-align: center;
    line-height: 1;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:first-child {
      margin-right: 127px;
    }
    &.active,
    &:hover {
      color: #298eff;
    }
    &.active {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        border-radius: 1px;
        background: #298eff;
        transition: all 0.3s ease-in-out;
      }
    }
  }
`
