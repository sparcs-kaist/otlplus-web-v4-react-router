import type { ChangeEvent, InputHTMLAttributes } from "react"
import React, { useEffect } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { type ThemeType } from "@/styles/themes"

// PhoneInput, RentalInput에서 사용하기 위해 export
export interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string
  placeholder: string
  errorMessage?: string
  area?: boolean
  disabled?: boolean
  value?: string
  handleChange?: (value: string) => void
  setErrorStatus?: (hasError: boolean) => void
}

const errorBorderStyle = css`
  border-color: red;
`

const disabledStyle = css`
  background-color: rgba(245, 245, 245, 1);
`

const areaInputStyle = (theme: ThemeType) => css`
  height: 173px;
  resize: none;
  overflow: auto;
  background: transparent;
  border: 1px solid ${theme.colors.Line.block};
  padding: 8px;
  border-radius: 6px;

  &::placeholder {
    color: ${theme.colors.Text.placeholder};
  }
`

const Input = styled.input<TextInputProps & { hasError: boolean }>`
  display: block;
  width: 100%;
  padding: 12px 16px;
  outline: none;
  border-radius: 4px;
  gap: 8px;
  font-size: 14px;
  line-height: 17.5px;
  color: rgba(51, 51, 51, 1);
  background-color: rgba(245, 245, 245, 1);
  ${({ disabled }) => disabled && disabledStyle}
  ${({ hasError }) => hasError && errorBorderStyle}
  ${({ theme, area }) => area && areaInputStyle(theme)}
`

const InputWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  gap: 4px;
`

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`

// Component
const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  errorMessage = "",
  area = false,
  disabled = false,
  value = "",
  handleChange = () => {},
  setErrorStatus = () => {},
  ...props
}) => {
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    handleChange(inputValue)
  }

  useEffect(() => {
    const hasError = !!errorMessage
    if (setErrorStatus) {
      setErrorStatus(hasError)
    }
  }, [errorMessage, setErrorStatus])

  return (
    <InputWrapper>
      <InputContainer>
        <Input
          as={area ? "textarea" : "input"}
          placeholder={placeholder}
          hasError={!!errorMessage}
          area={area}
          disabled={disabled}
          defaultValue={value}
          onChange={handleValueChange}
          {...props}
        />
      </InputContainer>
    </InputWrapper>
  )
}

export default TextInput
