const Utils = {
  randomId: (base: string) => (base ? base + '_' : '') + Math.random().toString(36).substr(2, 9)
}

export default Utils