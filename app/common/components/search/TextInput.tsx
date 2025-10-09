import React, { forwardRef, useEffect } from "react"
import type { ChangeEvent, InputHTMLAttributes } from "react"

import { css } from "@emotion/css"
import styled from "@emotion/styled"

export interface TextInputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    label?: string
    errorMessage?: string
    handleChange?: (value: string) => void
    setErrorStatus?: ($hasError: boolean) => void
    $placeholderColor?: string
}

const errorBorderStyle = css`
    border-color: red;
`

const disabledStyle = css`
    background-color: rgba(245, 245, 245, 1);
`

const Input = styled.input<{
    $hasError: boolean
    $placeholderColor?: string
}>`
    display: block;
    width: 100%;
    outline: none;
    border-radius: 4px;
    font-size: 16px;
    line-height: 20px;
    color: rgba(51, 51, 51, 1);
    border: 0;
    padding: 8px;

    &::placeholder {
        color: ${({ $placeholderColor }) => $placeholderColor || "#aaaaaa"};
    }

    ${({ disabled }) => disabled && disabledStyle};
    ${({ $hasError }) => $hasError && errorBorderStyle};
`

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    gap: 4px;
`

const InputContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    (
        {
            placeholder,
            errorMessage = "",
            disabled = false,
            value = "",
            handleChange,
            setErrorStatus,
            $placeholderColor,
            ...props
        },
        ref,
    ) => {
        const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
            handleChange?.(e.target.value)
        }

        useEffect(() => {
            setErrorStatus?.(!!errorMessage)
        }, [errorMessage, setErrorStatus])

        return (
            <InputWrapper>
                <InputContainer>
                    <Input
                        ref={ref}
                        placeholder={placeholder}
                        $hasError={!!errorMessage}
                        disabled={disabled}
                        value={value}
                        onChange={handleValueChange}
                        $placeholderColor={$placeholderColor}
                        {...props}
                    />
                </InputContainer>
            </InputWrapper>
        )
    },
)

TextInput.displayName = "TextInput"

export default TextInput
