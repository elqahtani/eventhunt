<div style="text-align: left;">
  <a href="https://eventhunt.co">
    <h1>
      <img src="./assets/eventhunt.png" alt="Eventhunt Logo">
    </h1>
  </a>
</div>

# Eventhunt Design 

EventHunt Design

EventHunt can help you find a popular event that matches with your passion or share event near your location. 


Site   | URL
-------|----
Web    | https://eventhunt.co
API    | https://api.eventhunt.co
Design | https://invis.io/7HEEJI6PE

--------------------------------------------------------------------------------

## Project Structure

- [Design](.README.md)
- [Client](./client/README.md)
- [Server](./server/README.md)

--------------------------------------------------------------------------------

## List All Features

- Welcome Page Login / Signup
- See list of events
- See list of events with specific category
- Authentication
  - Sign up new user
  - Sign in existing user
  - Sign out
- User actions
  - Post a new event
    - Fill the information about the title/name, date and time description URL, location.

--------------------------------------------------------------------------------

## Pages

URL                                | Description
-----------------------------------|------------------
https://eventhunt.co               | Home / List All event posted
https://eventhunt.co/welcome       | Sign up and Sign In page
https://eventhunt.co/profile/1     | Show user profile
https://eventhunt.co/post          | Create new event
https://eventhunt.co/event/1       | Show description each event

--------------------------------------------------------------------------------

## Models

### User

For example structure data for User. URL : https://eventhunt.co/profile/1

Field                 | Description
----------------------|------------
**_id**               | ObjectID from MongoDB
**id**                | The user's unique username. Incremental and Required.
**email**             | Email user 
**password**          | Pasword user
**hash**              | Hash user
**salt**              | Salt user
**name**              | Name profile user
**username**          | Username for profile
**meta**              | Meta atribute for user
**token**             | Token for authentication user
**auth**              | Token for authentication user
**verify**            | Token for authetication user
**profile**           | Attribute profile related with user
**gravatar**          | Image user profile
**description**       | The user's optional self-description
**links**             | Links related with user profile
**events**            | ObjectID related with event 
**createdAt**         | Creation date of the event, in [Unix Time](http://en.wikipedia.org/wiki/Unix_time)

Example format data for user : 


```js
{
  _id: ObjectId(),
  id: 2,
  email: "hello@eventhunt.co", 
  password: "password", 
  hash: "password", 
  salt: "salt",
  name: "Eventhunt", 
  username: "eventhunt", 
  meta: {
    token: {
      auth: "EXAMPLETOKEN" 
      verify: "EXAMPLETOKEN" 
    }
  },
  profile: {
    gravatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50", 
    description: "I am freelance Content Creator", 
  },
  links: {
    website: "https://eventhunt.co", 
    facebook: "https://facebook.com/eventhunt",
    twitter: "https://twitter.com/eventhunt",
  },
  events: [ // optional
    ObjectId(),
    ObjectId(),
    ObjectId()
  ],
  url: {
    link: "https://eventhunt.co/user/1",
  },
  createdAt: ISODate(), // timestamp
}
```

### Event

For example structure data for Event. URL : http://eventhunt.co/events/1

Field                 | Description
----------------------|------------
**_id**               | ObjectID from MongoDB
**id**                | The user's unique username. Incremental and Required.
**submitter**         | ObjectID from user who post the event
**title**.            | Title event
**description**       | The event description.
**image**             | Event image
**meta**              | List of attribute related with event
**categories**        | Attribute category for event 
**schedule**          | Schedule date of the event, in [Unix Time](http://en.wikipedia.org/wiki/Unix_time)
**timezone**          | Timezone for event
**location**          | Attribute location related with event
**place**             | Attribute place for location related with event
**url**               | Attribute URL related with event
**link**              | Attribute link url related with event
**createdAt**         | Creation date of the event, in [Unix Time](http://en.wikipedia.org/wiki/Unix_time)

Example format data for event : 

```js
{
  _id: ObjectId(), 
  id: 1, 
  submitter: ObjectId(),
  title: "Hackathon Merdeka",
  description: "Hackathon make application usefull for people",
  image: "http://url-static/file.jpg",
  meta: {
    categories: [ "Hackathon" ],
  },
  schedule: {
    date: ISODate(), 
    timezone: "GMT+7" 
  },
  location: {
    place: "Jogjakarta Digital Valley",
  },
  url: {
    link: "https://eventhunt.co/event/1"
  },
  createdAt: ISODate(), 
}
```

--------------------------------------------------------------------------------

## Inspirations

- https://facebook.com/events
- https://eventbrite.com
- https://meetup.com
- https://seputarevent.com
- https://producthunt.com
- https://github.com/eventbyte

