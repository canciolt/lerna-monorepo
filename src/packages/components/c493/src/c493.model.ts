import { C398_MODEL } from "../../c398/src/c398.model";
import { C396_MODEL } from "../../c396/src/c396.model";
import { C399_MODEL } from "../../c399/src/c399.model";

export enum C493_SHOW_MODEL {
  C389 = 'c389',
  C398 = 'c398',
  C396 = 'c396',
  C399 = 'c399'
}


export declare interface C493_MODEL {
  componentClass: string
  showComponent: C493_SHOW_MODEL
  c389Data?: C398_MODEL
  c398Data?: C398_MODEL
  c396Data?: C396_MODEL
  c399Data?: C399_MODEL
}
