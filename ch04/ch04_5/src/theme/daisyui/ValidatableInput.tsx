import type {ReactInputProps} from './Input'
import {forwardRef, useImperativeHandle, useMemo} from 'react'

export type ValidatableInputMethods = {}

export const ValidatableInput = forwardRef<ValidatableInputMethods, ReactInputProps>(
  ({className: _className, ...inputProps}, methodsRef) => {
    const className = useMemo(() => ['input', _className].join(' '), [_className])

    useImperativeHandle(methodsRef, () => ({}), [])

    return <input {...inputProps} className={className} />
  }
)
