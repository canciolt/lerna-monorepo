import { E64_MODEL } from "../../../elements/e64/src/e64.model";
import { C116_MODEL } from "../../c116/src/c116.model";
import { C397_MODEL } from "c397/src/c397.model";

export declare interface C399_VMODEL {
  password: string
  confirm_password: string
}

export declare interface C399_MODEL {
  componentClass?: string
  buttonTitle?: string
  e64Data: E64_MODEL
  c116Data: C116_MODEL
  c397Data: C397_MODEL
}