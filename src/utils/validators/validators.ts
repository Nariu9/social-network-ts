export const required = (value: string) => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    const textValue = value && value.trim()
    if (textValue && textValue.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}

export type ValidatorType = typeof required | typeof maxLengthCreator
export type ValidatorsType = typeof required & typeof maxLengthCreator