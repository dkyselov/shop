const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const PORT = process.env.port || 3000

const USERS = [
  {
    id: '123',
    name: 'dmytro',
    email: 'devdmytro@gmail.com',
    password: 'todo'
  }
]

app.use(bodyParser.json());

app.post('/login', function(req, res) {
  const body = req.body;

  const user = USERS.find(user => user.username === body.username && user.password == body.password);
  if(!user) return res.sendStatus(401);

  const token = jwt.sign({userID: user.id}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
  res.send({token});
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
