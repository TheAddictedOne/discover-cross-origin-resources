const express = require('express')
const app = express()

const PORT = 3001
const CORP = 'Cross-Origin-Resource-Policy'
const CORP_SAMESITE = 'same-site'
const CORP_SAMEDOMAIN = 'same-domain'
const CORP_CROSSORIGIN = 'cross-origin'
const COEP = 'Cross-Origin-Embedder-Policy'
const COEP_REQUIRECORP = 'require-corp'

app.use(express.static('static'))

app.use(express.static('static/no-headers'))

app.use(express.static('static/corp-same-site', {
  setHeaders: (res) => res.set(CORP, CORP_SAMESITE)
}))
app.use(express.static('static/corp-same-domain', {
  setHeaders: (res) => res.set(CORP, CORP_SAMEDOMAIN)
}))
app.use(express.static('static/corp-cross-origin', {
  setHeaders: (res) => res.set(CORP, CORP_CROSSORIGIN)
}))

app.use(express.static('static/coep-require-corp/no-corp', {
  setHeaders: (res) => res.set(COEP, COEP_REQUIRECORP)
}))
app.use(express.static('static/coep-require-corp/same-site', {
  setHeaders: (res) => {
    res.set(COEP, COEP_REQUIRECORP)
    res.set(CORP, CORP_SAMESITE)
  }
}))
app.use(express.static('static/coep-require-corp/same-domain', {
  setHeaders: (res) => {
    res.set(COEP, COEP_REQUIRECORP)
    res.set(CORP, CORP_SAMEDOMAIN)
  }
}))
app.use(express.static('static/coep-require-corp/cross-origin', {
  setHeaders: (res) => {
    res.set(COEP, COEP_REQUIRECORP)
    res.set(CORP, CORP_CROSSORIGIN)
  }
}))

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
