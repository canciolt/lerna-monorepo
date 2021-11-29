const Utils = {
  randomId: (base: string) => (base ? base + '_' : '') + Math.random().toString(36).substr(2, 9),
  assetsHandler: (chunkInfo: Record<string, any>) => {
    const basePath = (chunkInfo.name.indexOf('/assets/src/fonts/') !== -1) ? 'fonts' : 'assets'
    return (chunkInfo.name === 'style.css')
      ? 'global.css'
      : `${basePath}/[name].[ext]`
  }
}

export default Utils