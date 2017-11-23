import React from "react"

import LinkToProfile from "../atoms/LinkToProfile"

import DATA_PROFILES from "../data/profiles"

const Profiles = () => (
  <ul>
    {DATA_PROFILES.map(profile => {
      return (
        <li>
          <LinkToProfile user={profile} />
        </li>
      )
    })}
  </ul>
)

export default Profiles