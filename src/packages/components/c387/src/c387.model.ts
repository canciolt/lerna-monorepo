export declare interface  C387_LINKS_MODEL {
  linkClass?: string
  href: string,
  title: string,
  aria?: string
}

export declare interface C387_VMODEL {
  username: string,
  password: string
  checked: boolean
}

export declare interface  C387_MODEL {
  componentClass: string,
  buttonTitle: string,
  links: C387_LINKS_MODEL[],
  modelValue: C387_VMODEL
}