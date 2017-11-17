const jwt = require("jsonwebtoken")

module.exports = {
  // DECODE TOKEN
  decodeToken: token => {
    const decoded = jwt.verify(token, process.env.SECRET)

    if (decoded) return decoded
    else return null
  }
}
