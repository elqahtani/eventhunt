import jwt_decode from "jwt-decode"

const helpers = {
  setToken: token => {
    window.localStorage.setItem("user", token)
  },

  getToken: () => {
    const token = window.localStorage.getItem("user")
    return token
  },

  deleteToken: () => {
    window.localStorage.removeItem("user")
  },

  decodeToken: () => {
    const token = helpers.getToken() || ""

    if (token !== "") {
      const decoded = jwt_decode(token)
      // console.log(decoded)
      return {
        _id: decoded._id,
        id: decoded.id,
        name: decoded.name
      }
    } else {
      return null
    }
  }
}

export default helpers
