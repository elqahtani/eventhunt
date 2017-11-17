module.exports = {
  get: (req, res, next) => {
    const text = `RESPONSE ROOT FROM ${req.path}`
    res.send({
      message: text
    })
  }
}
