# Eventhunt Design 

EventHunt Design

EventHunt is an event aggregator of any technical events or meetups.

EventHunt can help you find a popular event that matches with your passion or share event near your location. 

Site   | URL
-------|----
Web    | https://eventhunt.co
API    | https://api.eventhunt.co
Design | https://invis.io/p/P21D8H6FB8XH

--------------------------------------------------------------------------------

## Project Structure

- [Design](.README.md)
- [Client](./client/README.md)
- [Server](./server/README.md)

--------------------------------------------------------------------------------

## Features

- Welcome Page Login / Signup
- See list of events
- See list of events with category specific
- Authentication
  - Sign up as a new user 
  - Sign in as an existing user
  - Sign out
  - Forgot password via email
- Registered user actions
  - Post a new event
    - Fill the information about the title/name, date and time description URL, location.
  - Bookmark an event

--------------------------------------------------------------------------------

## Inspirations

- https://facebook.com/events
- https://eventbrite.com
- https://meetup.com
- https://seputarevent.com
- https://producthunt.com
- https://github.com/eventbyte

--------------------------------------------------------------------------------

## Pages

- [x] Welcome
- [x] Home
- [x] Sign Up
- [x] Sign In
- [x] Sign Out
- [x] User Profile
- [x] New Event
- [x] Single Event
  - [ ] User Join Event
  - [ ] User Discuss in Event
- [x] Search
  - [x] Title
  - [ ] Category
  - [ ] Topic
  - [ ] Location
  - [ ] Date

--------------------------------------------------------------------------------

## Example URLs

- [x] https://eventhunt.co
- [x] https://eventhunt.co/welcome
- [x] https://eventhunt.co/signout
- [ ] https://eventhunt.co/verify
- [ ] https://eventhunt.co/verify?token=EXAMPLETOKEN
- [ ] https://eventhunt.co/reset
- [ ] https://eventhunt.co/reset?token=EXAMPLETOKEN
- [x] https://eventhunt.co/user/12345678
- [x] https://eventhunt.co/admin
- [x] https://eventhunt.co/huda
- [x] https://eventhunt.co/new
- [ ] https://eventhunt.co/featured
- [x] https://eventhunt.co/event/12345678
- [x] https://eventhunt.co/event/impactbyte-hackathon-premiere
- [ ] https://eventhunt.co/search?title=hackathon
- [ ] https://eventhunt.co/search?category=technology
- [ ] https://eventhunt.co/search?location=jakarta
- [ ] https://eventhunt.co/search?date=2017-11

--------------------------------------------------------------------------------
## Models

### User

```js
{
  _id: ObjectId(),
  id: 2,
  email: "hello@eventhunt.co", // required, validate: email
  password: "3ncrypt3d", // required
  hash: "3ncrypt3d", // required
  salt: "s41t", // required
  name: "Eventhunt", // required
  username: "eventhunt", // required
  meta: {
    token: {
      auth: "ABCDEFGH" // optional
      verify: "ABCDEFGH" // optional
    }
  },
  profile: {
    gravatar: "https://en.gravatar.com/userimage/13324518/b1559a0310a452e00c09eeb24465d0a3?size=200", // optional
    title: "Educator of Impact Byte", // optional
    birthDate: ISODate("1993-05-23T00:00:00.000Z"), // optional
    age: 23 // optional
  },
  links: {
    website: "https://eventhunt.co", // optional
    facebook: "https://facebook.com/eventhunt", // optional
    linkedin: "https://linkedin.com/in/eventhunt", // optional
    twitter: "https://twitter.com/eventhunt", // optional
  },
  events: [ // optional
    ObjectId(),
    ObjectId(),
    ObjectId()
  ],
  url: {
    plain: "https://eventhunt.co/user/2", // optional
    vanity: "https://eventhunt.co/eventhunt" // optional
  },
  createdAt: ISODate(), // timestamp
  updatedAt: ISODate() // timestamp
}
```

### Event

```js
{
  _id: ObjectId(), // unique
  id: 1, // unique
  submitter: ObjectId(), // User
  title: "Impact Byte Hackathon Premiere", // required
  description: "All fun of premier hackathon for the first timer developers.", // optional
  image: "https://website.com/impactbyte-hackathon-premiere.jpg", // optional
  meta: {
    categories: [ "Competition" ], // optional
  },
  schedule: {
    date: ISODate(), // required
    timezone: "GMT+7" // optional
  },
  location: {
    detailLocation: "Impact Hub Jakarta, Kemang", // optional
  },
  url: {
    plain: "https://eventbyte.co/event/1" // optional
  },
  createdAt: ISODate(), // timestamp
  updatedAt: ISODate() // timestamp
}
```


