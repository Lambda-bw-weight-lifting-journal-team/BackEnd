# BackEnd

## API Routes
**Login route. POST request**
- https://bw-weight-lifting.herokuapp.com/api/auth/login

**Register user route. POST request**
- https://bw-weight-lifting.herokuapp.com/api/auth/register

**GET request to get all exercises for a user**
- https://bw-weight-lifting.herokuapp.com/api/users/:id/exercises

**POST request to add an exercise to a user's account**
- https://bw-weight-lifting.herokuapp.com/api/users/:id/exercises

**PUT request to update an exercise by id**
- https://bw-weight-lifting.herokuapp.com/api/exercises/:id

**DELETE request delete an exercise by id**
- https://bw-weight-lifting.herokuapp.com/api/exercises/:id

---
## Database Schema
### Users
- id
- username (Required)
- password (Required)

### Exercises
- id
- user_id (Defaults to the id in url from `req.params.id`)
- name (Required)
- amount_lifted
- units (Defaults to "lbs" if not presented)
- reps_completed
- date (Defaults to date it was created if not filled in)
- body_region (Required)