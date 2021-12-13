import { M106_MODEL } from '../../m106/src/m106.model'

export declare interface HEADER_LINKS_MODEL {
  linkClass?: string
  href: string
  title: string
  text: string
  aria?: string
  iconSM?: string
  iconLG?: string
}

export declare interface HEADER_MODEL {
  componentClass?: string
  links?: HEADER_LINKS_MODEL[]
  m106Data?: M106_MODEL
}