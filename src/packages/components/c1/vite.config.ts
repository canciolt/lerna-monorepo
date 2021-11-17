import packageJson from './package.json'
import { getComponentConfig } from '../../../configs'

export default ({ mode }: Record<string, any>) => {
  return getComponentConfig(packageJson, {}, mode)
}
