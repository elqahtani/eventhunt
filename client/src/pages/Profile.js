import React from "react"

import DATA_PROFILES from "../data/profiles"

const Profile = props => (
  <div>
    {DATA_PROFILES.filter(profile => {
      return profile._id === Number(props.match.params.id)
    }).map(profile => {
      return (
        <div key={profile._id}>
          <h2>{profile.name}</h2>
          {profile.title && <h4>{profile.title}</h4>}
          {profile.bio && <p>{profile.bio}</p>}
          <small>id: {profile._id}</small>
        </div>
      )
    })}
  </div>
)

export default Profile