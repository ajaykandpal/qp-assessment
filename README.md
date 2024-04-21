# QUESTIONPRO ASSESSMENT

## API ENDPOINTS

### USERS:

Post http://localhost:8000/api/v1/users/register -> to register a new user (normal or admin).Provide email, name, password (or role if admin) in body

Post http://localhost:8000/api/v1/users/login -> for login. Provide email and password in body

### Grocery:

#### All of these requires a user(normal or admin both) to be logged in (provide authentication with user id in postman, jwt key is "shhhh")

Get http://localhost:8000/api/v1/grocery/ -> to view all groceries

Get http://localhost:8000/api/v1/grocery/:id -> to view a particular grocery

#### Below mentioned APIs are available for admin user only

Delete http://localhost:8000/api/v1/grocery/:id -> to delete a particular item

Patch http://localhost:8000/api/v1/grocery/:id -> to update a particular item. Provide things to upadte in body.

Post http://localhost:8000/api/v1/grocery/ -> to create a new grocery item entry. Provide details in body.

### Order

#### This also requires a user to be logged in.

Post http://localhost:8000/api/v1/order/ -> to create a new order. Right now limited to ony 10 items per order.
