import { C116_MODEL } from "../../c116/src/c116.model";
import { C387_MODEL, C387_VMODEL } from "../../c387/src/c387.model";

export interface C389_MODEL {
  componentClass?: string,
  headerText?: string,
  c116Data?: C116_MODEL
  c387Data?: C387_MODEL
  modelValue?: C387_VMODEL
}