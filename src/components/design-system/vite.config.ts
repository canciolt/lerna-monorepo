import path from 'path';
const pkg = require(path.resolve(__dirname, 'package.json'));
import { getComponentConfig } from '../../configs';

export default ({ mode }: Record<string, any>) => {
    return getComponentConfig(pkg, {}, mode)
}
