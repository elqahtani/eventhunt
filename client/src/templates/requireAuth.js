import React from "react"
import { withRouter, Redirect } from "react-router-dom"

export default function requireAuth(Component) {
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuth()
    }

    checkAuth() {
      if (!this.props.isAuthenticated) {
        const location = this.props.location
        const redirect = location.pathname + location.search

        this.props.history.push(`/welcome?redirect=${redirect}`)
      }
    }

    render() {
      return this.props.isAuthenticated ? (
        <Component {...this.props} />
      ) : (
        <Redirect to="/welcome" />
      )
    }
  }

  return withRouter(AuthenticatedComponent)
}
