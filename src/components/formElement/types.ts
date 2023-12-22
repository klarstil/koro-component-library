export type InputProps = {
    modelValue: string | number | undefined
    type: 'text' | 'number' | 'email'
    required?: boolean,
    placeholder?: string,
    showPlaceholderInitially?: boolean
    name: string
}

export type LabelProps = {
    name: string,
    required?: boolean
};

export type TextareaProps = {
    modelValue: string | undefined,
    required: boolean,
    placeholder?: string,
    showPlaceholderInitially?: boolean,
    name: string
}