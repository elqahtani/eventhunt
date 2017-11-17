import React from "react"

import { BrowserRouter as Router, Route } from "react-router-dom"

import Layout from "./templates/Layout"

import Welcome from "./pages/Welcome"
import Home from "./pages/Home"
import PopularEvent from "./pages/PopularEvent"
import FAQ from "./pages/FAQ"
import Post from "./pages/Post"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"
import EventPage from "./pages/EventPage"
import UpdateProfile from "./pages/UpdateProfile"

// import requireAuth from "./templates/requireAuth"

import helpers from "./helpers"

const user = helpers.decodeToken()

const App = () => (
  <Router>
    <Layout>
      <Route path="/welcome" component={Welcome} />
      <Route exact path="/" component={Home} />
      <Route path="/popular" component={PopularEvent} />
      <Route path="/FAQ" component={FAQ} />
      <Route path="/post/:id" component={Post} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/FAQ" component={NotFound} />
      <Route path="/event" component={EventPage} />
      <Route path="/bio" component={UpdateProfile} />
    </Layout>
  </Router>
)

export default App
