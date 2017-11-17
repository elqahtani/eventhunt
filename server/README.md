# REST API
--------------------------------------------------------------------------------

Al root restapi url contain `/API` and Running on PORT : 8080

## Auth

Method | Endpoint | Description
-------|----------|------------
POST   | `/auth/signup` | Sign up 
POST   | `/auth/login`  | Login 
POST   | `/auth/check`  | Check token 

## Users


Method | Endpoint | Description
-------|----------|------------
GET    | `/profile`     | Get all user
GET    | `/profile/:id` | Get user by id
DELETE | `/profile/:id` | Delete user by id
PUT    | `/profile/:id` | Update user by id

### Events


Method | Endpoint | Description
-------|----------|------------
GET    | `/events`     | Get all events
GET    | `/events/:id` | Get event by id
POST   | `/events`     | Post event
DELETE | `/events/:id` | Delete event by id
PUT    | `/events/:id` | Update event by id
