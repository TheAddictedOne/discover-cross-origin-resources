// CORP: cross-origin
(function() {
  const self = document.currentScript
  const url = self.src
  const filename = url.substring(url.lastIndexOf('/') + 1);


  self.parentNode.textContent = `${filename} loaded`

  const sab = new SharedArrayBuffer()

  const start = window.performance.now()
  setTimeout(() => console.log('Elapsed time:', window.performance.now() - start), 1000)
})()
