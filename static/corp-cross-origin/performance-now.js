console.log('Cross origin isolated?', self.crossOriginIsolated)

const start = window.performance.now()

setTimeout(() => {
  const end = window.performance.now()
  console.log(`Elapsed time`, end - start)
}, 1000)

var sab = new SharedArrayBuffer()
