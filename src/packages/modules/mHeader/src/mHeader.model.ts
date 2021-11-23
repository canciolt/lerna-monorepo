import { M106_MODEL } from "../../m106/src/m106.model";

export declare interface MHEADER_LINKS_MODEL {
  linkClass?: string
  href: string
  title: string
  text: string
  aria?: string
  iconSM?: string
  iconLG?: string
}

export declare interface MHEADER_MODEL {
  componentClass?: string
  links?: MHEADER_LINKS_MODEL[]
  m106Data?: M106_MODEL
}