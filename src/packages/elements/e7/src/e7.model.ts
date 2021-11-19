export declare interface E7_MESSAGES_MODEL {
  class?: string,
  text: string
}

export declare interface E7_MODEL {
  componentClass?: string
  labelClass?: string
  label?: string
  inputClass?: string
  inputMinlength?: number
  inputMaxlength?: number
  inputAria?: string
  inputPlaceholder?: string
  inputDisabled?: boolean
  description?: string
  formMessages?: E7_MESSAGES_MODEL[]
  required?: boolean
  invalid?: boolean
}
