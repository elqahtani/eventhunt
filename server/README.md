# REST API
--------------------------------------------------------------------------------

### Auth

Method | Endpoint | Description
-------|----------|------------
POST   | `/auth/signup` | Sign up with new user data (public)
POST   | `/auth/login`  | Login with user data (public)
POST   | `/auth/check`  | Check token (public)

### Users

Root: `/api`

Method | Endpoint | Description
-------|----------|------------
GET    | `/users`     | Get all (public)
GET    | `/users/:id` | Get one (public)
DELETE | `/users/:id` | Delete one (only admin/authenticated)
PUT    | `/users/:id` | Update one (only authenticated)

### Questions

Root: `/api`

Method | Endpoint | Description
-------|----------|------------
GET    | `/events`     | Get all (public)
GET    | `/events/:id` | Get one (public)
POST   | `/events`     | Post one (only authenticated)
DELETE | `/events/:id` | Delete one (only event creator)
PUT    | `/events/:id` | Update one (only event creator)
