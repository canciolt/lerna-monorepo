import packageJson from './package.json'
import { getAssetsConfig } from '../../configs'

export default ({ mode }: Record<string, any>) => {
  return getAssetsConfig(packageJson, {}, mode)
}
