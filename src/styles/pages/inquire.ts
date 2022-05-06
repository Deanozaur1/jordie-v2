import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Image } from "../../components"
import { mq } from "../emotion"

export const InquireStyles = css`
  display: flex;
  flex-direction: column;

  .section-title {
    margin: 4rem 0 2rem;
  }
  .container {
    max-width: 960px;
  }
`
export const InquireBG = styled.div`
  .ui-image {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: #d6d6d6;
  }
`
export const InquireForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  color: currentColor;
`
export const InquireFormFieldFlex = styled.div`
  display: flex;
  justify-content: space-between;
  & > * {
    flex: 0 0 calc(50% - 1.25rem);
  }

  ${mq("<md")} {
    flex-direction: column;
    gap: inherit;
    & > * {
      flex: 1;
    }
  }
`
export const InquireFormFieldInput = css`
  outline: none;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid currentColor;
  font-size: 1.75rem;
  line-height: 1.5;
  resize: none;
  width: 100%;
  transition: all 200ms ease;

  &:focus::placeholder {
    color: currentColor;
    opacity: 1;
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`
export const InquireSubmit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    cursor: pointer;
    margin-inline-start: auto;
    background-color: transparent;
    text-transform: uppercase;
    border: 0;
    font-weight: bold;
    font-size: 1rem;
  }

  p {
    margin-bottom: 0;
  }
`
